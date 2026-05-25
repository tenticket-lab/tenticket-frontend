import { http } from '../../shared/api/httpClient'

export function loginApi(username, password) {
  return http('/api/login', { method: 'POST', body: { username, password } })
}
