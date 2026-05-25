import { http } from '../../shared/api/httpClient'

export function getDashboardApi(token) {
  return http('/api/reports/dashboard', { token })
}

export function getCustomersApi(token) {
  return http('/api/customers', { token })
}
