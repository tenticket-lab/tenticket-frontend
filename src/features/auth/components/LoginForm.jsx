import { useState } from 'react'

export default function LoginForm({
  onLoggedIn,
  setError,
  setMessage
}) {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false)

  const [loginData, setLoginData] = useState({
    username: 'admin',
    password: 'admin123'
  })

//   const [forgotEmail, setForgotEmail] = useState('')

  const [registerData, setRegisterData] = useState({
    fullName: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: ''
  })

  function handleSubmit(e) {
    e.preventDefault()

    if (
      loginData.username === 'admin' &&
      loginData.password === 'admin123'
    ) {
      const dummyUser = {
        id: 1,
        username: 'admin',
        role: 'admin',
        name: 'Demo Admin'
      }

      const dummyToken = 'dummy-jwt-token'

      onLoggedIn(dummyToken, dummyUser)
    } else {
      setError('Invalid username or password')
    }
  }

//   function handleForgotPassword() {
//     if (!forgotEmail) {
//       setError('Please enter your email')
//       return
//     }

//     setMessage('Password reset link sent successfully')
//     setForgotEmail('')
//   }

  function handleRegister(e) {
    e.preventDefault()

    if (registerData.password !== registerData.confirmPassword) {
      setError('Passwords do not match')
      return
    }

    setMessage('User registered successfully')

    setRegisterData({
      fullName: '',
      email: '',
      username: '',
      password: '',
      confirmPassword: ''
    })
  }

  return (
    <div className="space-y-8">

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Username
          </label>

          <input
            type="text"
            placeholder="Enter username"
            value={loginData.username}
            onChange={e =>
              setLoginData({
                ...loginData,
                username: e.target.value
              })
            }
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Password
          </label>

          <input
            type="password"
            placeholder="Enter password"
            value={loginData.password}
            onChange={e =>
              setLoginData({
                ...loginData,
                password: e.target.value
              })
            }
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500"
          />

          <div className="mt-3 text-right">
            <button
              type="button"
              onClick={() => window.dispatchEvent(
                new CustomEvent('openForgotPassword')
              )}
              className="text-sm text-emerald-700 hover:underline"
            >
              Forgot Password?
           </button>
          </div>
        </div>

        <button className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-700 to-green-600 text-white font-semibold shadow-lg hover:scale-[1.01] transition-all">
          Login
        </button>

        <div className="bg-green-50 border border-green-100 rounded-xl p-3 text-sm text-gray-700">
          <p className="font-semibold text-emerald-700 mb-1">
            Dummy Login Credentials
          </p>

          <p>Username: admin</p>
          <p>Password: admin123</p>
        </div>
      </form>

      {/* REGISTER SECTION */}
      <div className="border-t pt-5">
        <button
          onClick={() => setIsRegisterOpen(!isRegisterOpen)}
          className="w-full py-3 rounded-xl border border-emerald-600 text-emerald-700 font-semibold hover:bg-emerald-50 transition-all"
        >
          {isRegisterOpen
            ? 'Close Registration'
            : 'Register Yourself'}
        </button>

        {isRegisterOpen && (
          <form
            onSubmit={handleRegister}
            className="space-y-4 mt-6"
          >
            <input
              type="text"
              placeholder="Full Name"
              value={registerData.fullName}
              onChange={e =>
                setRegisterData({
                  ...registerData,
                  fullName: e.target.value
                })
              }
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500"
            />

            <input
              type="email"
              placeholder="Email Address"
              value={registerData.email}
              onChange={e =>
                setRegisterData({
                  ...registerData,
                  email: e.target.value
                })
              }
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500"
            />

            <input
              type="text"
              placeholder="Username"
              value={registerData.username}
              onChange={e =>
                setRegisterData({
                  ...registerData,
                  username: e.target.value
                })
              }
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500"
            />

            <input
              type="password"
              placeholder="Password"
              value={registerData.password}
              onChange={e =>
                setRegisterData({
                  ...registerData,
                  password: e.target.value
                })
              }
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500"
            />

            <input
              type="password"
              placeholder="Confirm Password"
              value={registerData.confirmPassword}
              onChange={e =>
                setRegisterData({
                  ...registerData,
                  confirmPassword: e.target.value
                })
              }
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500"
            />

            <button className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-700 to-green-600 text-white font-semibold shadow-lg hover:scale-[1.01] transition-all">
              Create Account
            </button>
          </form>
        )}
      </div>
    </div>
  )
}