export default function ProgressBar({ pct, color = "#5B8DEF", height = 6 }) {
  return (
    <div
      className="w-full rounded-full bg-surface3 overflow-hidden"
      style={{ height }}
      role="progressbar"
      aria-valuenow={pct}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className="h-full rounded-full transition-[width] duration-500 ease-out"
        style={{ width: `${pct}%`, background: color }}
      />
    </div>
  );
}
