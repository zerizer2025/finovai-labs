// app/services/page.tsx
"use client";

import React, { useEffect, useState } from 'react';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export default function ServicesPage() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // API وهمي (باستخدام JSONPlaceholder أو Mocky)
    fetch('https://mocki.io/v1/1dce4f9f-0c2b-4b4a-bf6d-21ad2dc5d3b8') 
      .then(res => res.json())
      .then(data => {
        setServices(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return <div className="text-center py-10 text-gray-500">Loading services...</div>;
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-8">
        Our Services
      </h1>

      <div className="grid gap-8 md:grid-cols-3">
        {services.map(service => (
          <div 
            key={service.id} 
            className="p-6 bg-white dark:bg-gray-800 shadow-md rounded-xl text-center hover:shadow-lg transition"
          >
            <div className="text-5xl mb-4">{service.icon}</div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {service.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
