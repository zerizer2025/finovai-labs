// src/app/blog/[slug]/page.tsx
import { client } from "@/sanity/lib/client";
import { PortableText } from "next-sanity";
import { PortableTextBlock } from "sanity";
import Link from "next/link";
import Image from "next/image";

interface BlogPost {
  title: string;
  slug: string;
  body: PortableTextBlock[];
  mainImage?: {
    asset: {
      url: string;
    };
    alt?: string;
  };
  publishedAt?: string;
  author?: {
    name: string;
    image?: {
      asset: {
        url: string;
      };
    };
  };
}

async function getPost(slug: string): Promise<BlogPost | null> {
  const query = `*[_type == "post" && slug.current == $slug][0]{
    title,
    "slug": slug.current,
    body,
    mainImage{
      asset->{url},
      alt
    },
    publishedAt,
    author->{
      name,
      image{
        asset->{url}
      }
    }
  }`;

  return client.fetch(query, { slug });
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPost(params.slug);

  if (!post) {
    return <div className="text-center text-red-500">Post not found</div>;
  }

  return (
    <div className="max-w-3xl mx-auto py-10">
      {/* العنوان */}
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>

      {/* الكاتب + التاريخ */}
      <div className="flex items-center gap-3 text-sm text-gray-500 mb-6">
        {post.author?.image?.asset?.url && (
          <Image
            src={post.author.image.asset.url}
            alt={post.author.name}
            width={40}
            height={40}
            className="rounded-full"
            priority // صورة صغيرة ومهمة
          />
        )}
        <span>{post.author?.name}</span>
        <span>·</span>
        <span>
          {post.publishedAt
            ? new Date(post.publishedAt).toLocaleDateString()
            : "No date"}
        </span>
      </div>

      {/* صورة المقال */}
      {post.mainImage?.asset?.url && (
        <div className="mb-6">
          <Image
            src={post.mainImage.asset.url}
            alt={post.mainImage.alt || "Blog image"}
            width={800}
            height={400}
            className="rounded-lg w-full object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 800px"
            placeholder="blur"
            blurDataURL="/blur-placeholder.png" // ضع صورة رمادية صغيرة في public
          />
        </div>
      )}

      {/* المحتوى */}
      <div className="prose prose-lg mb-10">
        <PortableText value={post.body} />
      </div>

      {/* زر العودة */}
      <Link
        href="/blog"
        className="inline-block px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700"
      >
        ← Back to Blog
      </Link>
    </div>
  );
}
