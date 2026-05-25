import { http } from '../../shared/api/httpClient'

export function createTicketApi(token, payload) {
  return http('/api/tickets', { method: 'POST', token, body: payload })
}
