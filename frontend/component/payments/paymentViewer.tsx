"use client";

export default function PaymentViewer({ screenshot }: { screenshot: string }) {
  if (!screenshot)
    return (
      <p className="text-sm text-gray-500 mt-3">
        No screenshot uploaded.
      </p>
    );

  return (
    <div className="mt-4">
      <h3 className="font-semibold mb-2">Screenshot</h3>

      <img
        src={screenshot}
        alt="Payment Screenshot"
        className="rounded border shadow max-w-sm"
      />
    </div>
  );
}
