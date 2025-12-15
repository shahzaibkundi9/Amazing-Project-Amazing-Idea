"use client";

import Link from "next/link";

export default function TemplateCard({ template }: any) {
  return (
    <Link href={`/templates/${template.id}`}>
      <div className="bg-white p-4 rounded shadow hover:shadow-md cursor-pointer">
        <h2 className="text-lg font-semibold">{template.title}</h2>

        <p className="text-xs text-gray-500 mt-1">
          Category: {template.category}
        </p>

        <p className="text-sm text-gray-600 mt-2 line-clamp-2">
          {template.content}
        </p>
      </div>
    </Link>
  );
}
