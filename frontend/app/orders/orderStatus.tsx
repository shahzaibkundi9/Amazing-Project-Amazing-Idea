export default function OrderStatus({ status }: { status: string }) {
  const colors: any = {
    pending: "bg-yellow-100 text-yellow-800",
    awaiting_advance: "bg-orange-100 text-orange-800",
    confirmed: "bg-green-100 text-green-800",
    processing: "bg-blue-100 text-blue-800",
    completed: "bg-green-200 text-green-900",
    cancelled: "bg-red-100 text-red-800"
  };

  return (
    <span
      className={`px-2 py-1 mt-2 inline-block rounded text-xs font-semibold ${
        colors[status] || "bg-gray-200"
      }`}
    >
      {status.replace("_", " ").toUpperCase()}
    </span>
  );
}
