export default function DashboardHeader({
  user,
  onLogout
}) {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
      <div>
        <h1 className="text-4xl font-bold text-emerald-900">
          Reports Dashboard
        </h1>

        <p className="text-gray-600 mt-1">
          Welcome back, {user.name}
        </p>
      </div>

      <button
        onClick={onLogout}
        className="px-5 py-3 rounded-xl bg-red-500 text-white font-medium hover:bg-red-600 transition-all"
      >
        Logout
      </button>
    </div>
  )
}