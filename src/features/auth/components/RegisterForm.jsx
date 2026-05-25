import { useState } from 'react'

export default function RegisterForm({ setError, setMessage }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: ''
  })

  function handleSubmit(e) {
    e.preventDefault()

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match')
      return
    }

    setMessage('User registered successfully (Dummy Frontend)')

    setFormData({
      fullName: '',
      email: '',
      username: '',
      password: '',
      confirmPassword: ''
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Full Name"
        value={formData.fullName}
        onChange={e =>
          setFormData({
            ...formData,
            fullName: e.target.value
          })
        }
        className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500"
      />

      <input
        type="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={e =>
          setFormData({
            ...formData,
            email: e.target.value
          })
        }
        className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500"
      />
      <input
        type="text"
        placeholder="Username"
        value={formData.username}
        onChange={e =>
          setFormData({
            ...formData,
            username: e.target.value
          })
        }
        className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500"
      />

      <input
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={e =>
          setFormData({
            ...formData,
            password: e.target.value
          })
        }
        className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500"
      />

      <input
        type="password"
        placeholder="Confirm Password"
        value={formData.confirmPassword}
        onChange={e =>
          setFormData({
            ...formData,
            confirmPassword: e.target.value
          })
        }
        className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500"
      />

      <button className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-700 to-green-600 text-white font-semibold shadow-lg hover:scale-[1.01] transition-all">
        Create Account
      </button>
    </form>
  )
}