import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  mainImage: { asset: { url: string } };
  author?: { name: string };
  publishedAt?: string;
}

async function getPosts() {
  const query = `*[_type == "post"] | order(_createdAt desc) {
    _id,
    title,
    slug,
    excerpt,
    mainImage{
      asset->{
        url
      }
    },
    author->{
      name
    },
    publishedAt
  }`;

  return await client.fetch<Post[]>(query);
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8">Latest Articles</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {posts.map((post) => (
          <Link
            key={post._id}
            href={`/blog/${post.slug.current}`}
            className="group border rounded-xl overflow-hidden shadow-md hover:shadow-xl transition"
          >
            {post.mainImage?.asset?.url && (
              <div className="relative w-full h-64">
                <Image
                  src={post.mainImage.asset.url}
                  alt={post.title}
                  fill
                  priority={false} // الصور لا تُحمَّل إلا عند الظهور
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            )}
            <div className="p-5">
              <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-3">{post.excerpt}</p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>{post.author?.name || "Unknown Author"}</span>
                <span>
                  {post.publishedAt
                    ? new Date(post.publishedAt).toLocaleDateString()
                    : ""}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
