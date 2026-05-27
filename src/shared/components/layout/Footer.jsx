export default function Footer() {
  return (
    <footer className="w-full bg-black/90 border-t border-white/10 mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-2">
        <p className="text-sm text-gray-400">
          © 2026 TenTicket. All rights reserved.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <button className="text-sm text-gray-400 hover:text-green-400 transition-all">
            Privacy Policy
          </button>

          <button className="text-sm text-gray-400 hover:text-green-400 transition-all">
            Terms
          </button>

          <button className="text-sm text-gray-400 hover:text-green-400 transition-all">
            Contact
          </button>
        </div>
      </div>
    </footer>
  )
}