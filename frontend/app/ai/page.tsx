"use client";

import { useEffect, useState } from "react";
import { api } from "../../lib/api";
import ProviderCard from "../../components/ai/providerCard";

export default function AISettingsPage() {
  const [providers, setProviders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProviders();
  }, []);

  const loadProviders = async () => {
    const res = await api.get("/ai/providers");
    if (res.success) {
      setProviders(res.data);
      setLoading(false);
    }
  };

  const updateProvider = async (id: string, update: any) => {
    const res = await api.put(`/ai/providers/${id}`, update);
    if (res.success) loadProviders();
  };

  if (loading) return <p>Loading…</p>;

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">AI Settings</h1>

      <p className="text-gray-600 mb-6">
        Manage AI providers, API keys, and rotation rules.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {providers.map((p) => (
          <ProviderCard key={p.id} provider={p} updateProvider={updateProvider} />
        ))}
      </div>
    </div>
  );
}
