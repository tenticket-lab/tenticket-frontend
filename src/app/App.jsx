import LoginPage from '../features/auth/LoginPage'
import CashierPage from '../features/tickets/CashierPage'
import AdminPage from '../features/dashboard/AdminPage'
import { useAuthState } from '../shared/hooks/useAuth'

export default function App() {
  const { user, token, setSession, clearSession } = useAuthState()

  if (!user) return <LoginPage onLoggedIn={setSession} />
  if (user.role === 'admin') return <AdminPage user={user} token={token} onLogout={clearSession} />
  return <CashierPage user={user} token={token} onLogout={clearSession} />
}
