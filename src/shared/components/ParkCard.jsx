export default function ParkCard({ title, value }) {
  return (
    <div className="bg-white/85 backdrop-blur-sm rounded-2xl shadow-md p-4 border border-green-100 animate-fadeUp">
      <p className="text-sm text-forest/80">{title}</p>
      <p className="text-2xl font-bold text-forest mt-1">{value}</p>
    </div>
  )
}
