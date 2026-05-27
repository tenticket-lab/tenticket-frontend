export default function Header({
  onNavigate,
  activePage
}) {
  return (
    <header className="w-full bg-black/95 backdrop-blur-md border-b border-white/10 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        {/* LOGO */}
        <div>
          <h1 className="text-lg sm:text-2xl font-bold tracking-wide text-white">
            TenTicket
          </h1>

          <p className="text-xs text-green-400">
            Smart Ticket Management
          </p>
        </div>

        {/* NAVIGATION */}
        <nav className="flex items-center gap-4 sm:gap-6 md:gap-8">
          <button
            onClick={() =>
              onNavigate('dashboard')
            }
            className={`text-sm font-medium transition-all ${
              activePage ===
              'dashboard'
                ? 'text-green-400'
                : 'text-gray-300 hover:text-green-400'
            }`}
          >
            Home
          </button>

          <button
            onClick={() =>
              onNavigate('reports')
            }
            className={`text-sm font-medium transition-all ${
              activePage ===
              'reports'
                ? 'text-green-400'
                : 'text-gray-300 hover:text-green-400'
            }`}
          >
            Reports
          </button>

          <button className="text-sm text-gray-300 hover:text-green-400 transition-all">
            Support
          </button>
        </nav>
      </div>
    </header>
  )
}