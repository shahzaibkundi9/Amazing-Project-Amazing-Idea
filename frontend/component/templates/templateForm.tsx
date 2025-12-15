"use client";

import { useState } from "react";
import { api } from "../../lib/api";
import { useRouter } from "next/navigation";

export default function TemplateForm({ mode, template }: any) {
  const router = useRouter();

  const [title, setTitle] = useState(template?.title || "");
  const [category, setCategory] = useState(template?.category || "general");
  const [content, setContent] = useState(template?.content || "");

  const save = async () => {
    if (mode === "create") {
      const res = await api.post("/templates", { title, category, content });
      if (res.success) router.push("/templates");
    } else {
      const res = await api.put(`/templates/${template.id}`, {
        title,
        category,
        content,
      });
      if (res.success) router.push("/templates");
    }
  };

  const remove = async () => {
    const res = await api.delete(`/templates/${template.id}`);
    if (res.success) router.push("/templates");
  };

  return (
    <div className="bg-white p-4 rounded shadow max-w-xl">
      <div className="mb-3">
        <label className="text-sm">Title</label>
        <input
          className="border p-2 w-full rounded mt-1"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Template title"
        />
      </div>

      <div className="mb-3">
        <label className="text-sm">Category</label>
        <select
          className="border p-2 w-full rounded mt-1"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="general">General</option>
          <option value="payment">Payment</option>
          <option value="welcome">Welcome</option>
          <option value="ai_response">AI Response</option>
          <option value="verification">Verification</option>
        </select>
      </div>

      <div className="mb-3">
        <label className="text-sm">Content</label>
        <textarea
          className="border p-2 w-full rounded mt-1 h-40"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Template content here…"
        />
      </div>

      <div className="flex gap-2 mt-4">
        <button onClick={save} className="px-4 py-2 bg-black text-white rounded">
          {mode === "create" ? "Create" : "Update"}
        </button>

        {mode === "edit" && (
          <button
            onClick={remove}
            className="px-4 py-2 bg-red-600 text-white rounded"
          >
            Delete
          </button>
        )}
      </div>
    </div>
  );
}
