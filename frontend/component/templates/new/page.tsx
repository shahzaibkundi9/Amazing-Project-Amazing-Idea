"use client";

import TemplateForm from "../../../components/templates/templateForm";

export default function NewTemplatePage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Create New Template</h1>
      <TemplateForm mode="create" />
    </div>
  );
}
