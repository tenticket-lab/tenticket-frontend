export default function AuthTabs({
  activeTab,
  setActiveTab,
  clearMessages
}) {
  function handleTab(tab) {
    clearMessages()
    setActiveTab(tab)
  }

  return (
    <div className="flex border-b bg-green-50">
      <button
        onClick={() => handleTab('login')}
        className={`flex-1 py-3 text-sm font-semibold transition-all ${
          activeTab === 'login'
            ? 'bg-white text-emerald-700 border-b-2 border-emerald-700'
            : 'text-gray-500 hover:bg-white/70'
        }`}
      >
        Login
      </button>

      {/* <button
        onClick={() => handleTab('register')}
        className={`flex-1 py-3 text-sm font-semibold transition-all ${
          activeTab === 'register'
            ? 'bg-white text-emerald-700 border-b-2 border-emerald-700'
            : 'text-gray-500 hover:bg-white/70'
        }`}
      >
        Register
      </button> */}

      {/* <button
        onClick={() => handleTab('forgot')}
        className={`flex-1 py-3 text-sm font-semibold transition-all ${
          activeTab === 'forgot'
            ? 'bg-white text-emerald-700 border-b-2 border-emerald-700'
            : 'text-gray-500 hover:bg-white/70'
        }`}
      >
        Forgot
      </button> */}
    </div>
  )
}