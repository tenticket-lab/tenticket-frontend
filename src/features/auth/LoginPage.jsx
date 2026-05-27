import { useState, useEffect } from 'react'

import AuthTabs from './components/AuthTabs'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
import ForgotPasswordForm from './components/ForgotPasswordForm'

import Header from '../../shared/components/layout/Header'
import Footer from '../../shared/components/layout/Footer'

export default function LoginPage({ onLoggedIn }) {
  const [activeTab, setActiveTab] = useState('login')

  const [error, setError] = useState('')
  const [message, setMessage] = useState('')

  const [showForgotPassword, setShowForgotPassword] =
    useState(false)

  useEffect(() => {
    function openForgot() {
      setShowForgotPassword(true)
      setError('')
      setMessage('')
    }

    window.addEventListener(
      'openForgotPassword',
      openForgot
    )

    return () => {
      window.removeEventListener(
        'openForgotPassword',
        openForgot
      )
    }
  }, [])

  function clearMessages() {
    setError('')
    setMessage('')
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-sky-200 via-green-100 to-green-300">

      <Header />

      <main className="flex-1 relative overflow-hidden flex items-center justify-center px-4 py-10">

        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top_left,#ffffff,transparent_30%),radial-gradient(circle_at_bottom_right,#bbf7d0,transparent_35%)]" />

        <div className="relative z-10 w-full max-w-md">
          <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl border border-white/40 overflow-hidden">
    
            <div className="bg-gradient-to-r from-emerald-700 to-green-600 px-8 py-5 text-white text-center">
              <h1 className="text-4xl font-extrabold tracking-wide">
                TenTicket Park
              </h1>

              <p className="mt-2 text-green-100 text-sm">
                Smart Ticket Management System
              </p>
            </div>


            {!showForgotPassword && (
              <AuthTabs
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                clearMessages={clearMessages}
              />
            )}

            <div className="p-8">
              {error && (
                <div className="mb-4 rounded-xl bg-red-100 border border-red-200 text-red-700 px-4 py-3 text-sm">
                  {error}
                </div>
              )}

              {message && (
                <div className="mb-4 rounded-xl bg-green-100 border border-green-200 text-green-700 px-4 py-3 text-sm">
                  {message}
                </div>
              )}

              {showForgotPassword ? (
                <ForgotPasswordForm
                  setError={setError}
                  setMessage={setMessage}
                  onBack={() => {
                    setShowForgotPassword(false)
                    clearMessages()
                  }}
                />
              ) : (
                <>

                  {activeTab === 'login' && (
                    <LoginForm
                      onLoggedIn={onLoggedIn}
                      setError={setError}
                      setMessage={setMessage}
                    />
                  )}

                  {activeTab === 'register' && (
                    <RegisterForm
                      setError={setError}
                      setMessage={setMessage}
                    />
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}