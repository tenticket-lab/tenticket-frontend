export default function StatsCard({
  title,
  value,
  subtitle
}) {
  return (
    <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg border border-white/40 p-6 hover:scale-[1.02] transition-all">
      <p className="text-sm text-gray-500 mb-2">
        {title}
      </p>

      <h2 className="text-3xl font-bold text-emerald-800">
        {value}
      </h2>

      {subtitle && (
        <p className="text-xs text-gray-400 mt-2">
          {subtitle}
        </p>
      )}
    </div>
  )
}