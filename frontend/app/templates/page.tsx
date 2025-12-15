"use client";

import { useEffect, useState } from "react";
import { api } from "../../lib/api";
import Link from "next/link";
import TemplateCard from "../../components/templates/templateCard";

export default function TemplatesPage() {
  const [templates, setTemplates] = useState([]);

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    const res = await api.get("/templates");
    if (res.success) setTemplates(res.data);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-2xl font-semibold">Templates</h1>

        <Link href="/templates/new">
          <button className="px-4 py-2 bg-black text-white rounded">
            + New Template
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {templates.map((t: any) => (
          <TemplateCard key={t.id} template={t} />
        ))}
      </div>
    </div>
  );
}
