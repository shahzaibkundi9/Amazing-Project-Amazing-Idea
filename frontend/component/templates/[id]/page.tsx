"use client";

import { useEffect, useState } from "react";
import { api } from "../../../lib/api";
import TemplateForm from "../../../components/templates/templateForm";

export default function EditTemplatePage({ params }: any) {
  const { id } = params;
  const [template, setTemplate] = useState<any>(null);

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    const res = await api.get(`/templates/${id}`);
    if (res.success) setTemplate(res.data);
  };

  if (!template) return <p>Loading…</p>;

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Edit Template</h1>
      <TemplateForm mode="edit" template={template} />
    </div>
  );
}
