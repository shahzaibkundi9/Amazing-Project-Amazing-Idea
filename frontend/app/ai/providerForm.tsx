"use client";

import { useState } from "react";

export default function ProviderForm({ provider, updateProvider }: any) {
  const [apiKey, setApiKey] = useState(provider.apiKey || "");
  const [enabled, setEnabled] = useState(provider.enabled);
  const [priority, setPriority] = useState(provider.priority || 1);

  const save = () => {
    updateProvider(provider.id, {
      apiKey,
      enabled,
      priority,
    });
  };

  return (
    <div className="space-y-3 mt-3">
      <div>
        <label className="text-sm">API Key</label>
        <input
          className="w-full border p-2 rounded mt-1"
          placeholder="Enter API Key"
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
        />
      </div>

      <div>
        <label className="text-sm">Priority</label>
        <input
          type="number"
          className="w-full border p-2 rounded mt-1"
          value={priority}
          onChange={(e) => setPriority(parseInt(e.target.value))}
        />
      </div>

      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={enabled}
          onChange={(e) => setEnabled(e.target.checked)}
        />
        <span className="text-sm">Enable Provider</span>
      </div>

      <button
        onClick={save}
        className="px-4 py-2 bg-black text-white rounded"
      >
        Save
      </button>
    </div>
  );
}
