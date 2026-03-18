export function StatusBadge({ status }: { status?: string }) {
  if (!status) return null;
  const cls =
    status === "Active"
      ? "status-active"
      : status === "Shipped"
        ? "status-shipped"
        : "status-paused";
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${cls}`}
    >
      {status === "Active" && (
        <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-emerald-500" />
      )}
      {status}
    </span>
  );
}
