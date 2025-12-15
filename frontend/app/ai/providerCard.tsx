"use client";

import ProviderForm from "./providerForm";

export default function ProviderCard({ provider, updateProvider }: any) {
  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h2 className="text-lg font-semibold">{provider.name}</h2>

      <p className="text-gray-600 text-sm mb-3">
        Status:{" "}
        <span
          className={`px-2 py-1 text-xs rounded ${
            provider.enabled ? "bg-green-200 text-green-800" : "bg-red-200 text-red-800"
          }`}
        >
          {provider.enabled ? "Enabled" : "Disabled"}
        </span>
      </p>

      <ProviderForm provider={provider} updateProvider={updateProvider} />
    </div>
  );
}
