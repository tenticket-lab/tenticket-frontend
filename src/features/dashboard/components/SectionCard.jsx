export default function SectionCard({
  title,
  children
}) {
  return (
    <div className="bg-white/90 rounded-2xl shadow-lg p-6">
      <h2 className="text-xl font-semibold text-emerald-800 mb-5">
        {title}
      </h2>

      {children}
    </div>
  )
}