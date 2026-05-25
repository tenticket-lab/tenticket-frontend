import { useMemo, useState } from 'react'

export function useAuthState() {
  const [auth, setAuth] = useState(() => {
    const token = localStorage.getItem('token')
    const user = localStorage.getItem('user')
    return { token: token || '', user: user ? JSON.parse(user) : null }
  })

  function setSession(token, user) {
    localStorage.setItem('token', token)
    localStorage.setItem('user', JSON.stringify(user))
    setAuth({ token, user })
  }

  function clearSession() {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    setAuth({ token: '', user: null })
  }

  return useMemo(() => ({ ...auth, setSession, clearSession }), [auth])
}
