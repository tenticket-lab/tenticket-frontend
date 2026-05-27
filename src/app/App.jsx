import { useState } from 'react'

import LoginPage from '../features/auth/LoginPage'
import CashierPage from '../features/tickets/CashierPage'
import AdminPage from '../features/dashboard/AdminPage'
import ReportsPage from '../features/dashboard/components/ReportsPage'

import { useAuthState } from '../shared/hooks/useAuth'

export default function App() {
  const {
    user,
    token,
    setSession,
    clearSession
  } = useAuthState()

  const [activePage, setActivePage] =
    useState('dashboard')

  // LOGIN
  if (!user) {
    return (
      <LoginPage
        onLoggedIn={setSession}
      />
    )
  }

  // ADMIN
  if (user.role === 'admin') {
    if (activePage === 'reports') {
      return (
        <ReportsPage
          user={user}
          onLogout={clearSession}
          onNavigate={setActivePage}
        />
      )
    }

    return (
      <AdminPage
        user={user}
        token={token}
        onLogout={clearSession}
        onNavigate={setActivePage}
      />
    )
  }

  // CASHIER
  return (
    <CashierPage
      user={user}
      token={token}
      onLogout={clearSession}
    />
  )
}