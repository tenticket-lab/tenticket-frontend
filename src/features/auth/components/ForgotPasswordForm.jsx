import { useState } from 'react'

export default function ForgotPasswordForm({
  setError,
  setMessage,
  onBack
}) {
  const [email, setEmail] = useState('')

  function handleSubmit(e) {
    e.preventDefault()

    if (!email) {
      setError('Please enter your email')
      return
    }

    setMessage('Password reset link sent successfully')
    setEmail('')
  }

  return (
    <div>
      <button
        onClick={onBack}
        className="mb-6 text-sm text-emerald-700 hover:underline"
      >
        ← Back to Login
      </button>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Registered Email
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        <button className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-700 to-green-600 text-white font-semibold shadow-lg hover:scale-[1.01] transition-all">
          Send Reset Link
        </button>
      </form>
    </div>
  )
}