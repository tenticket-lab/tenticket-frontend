import { useMemo, useState } from 'react'
import { createTicketApi } from './ticketApi'

export default function CashierPage({ user, token, onLogout }) {
  const [form, setForm] = useState({
    customer_name: '', mobile_number: '', address: '', dob: '', number_of_persons: 1,
    ticket_type: 'full_park', total_amount: '', payment_mode: 'cash'
  })
  const [message, setMessage] = useState('')

  const bandInstruction = useMemo(() => form.ticket_type === 'full_park' ? 'Issue RED Band' : 'Issue BLUE Band', [form.ticket_type])

  async function submit(e) {
    e.preventDefault()
    const payload = { ...form, total_amount: Number(form.total_amount), number_of_persons: Number(form.number_of_persons) }
    const res = await createTicketApi(token, payload)
    setMessage(`${res.message}. ${res.band_instruction}`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 to-green-300 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-forest animate-sway">Ticket Counter</h2>
          <div className="text-right">
            <p className="text-sm">{user.name} ({user.role})</p>
            <button onClick={onLogout} className="text-sm text-red-600">Logout</button>
          </div>
        </div>
        <form onSubmit={submit} className="bg-white rounded-2xl shadow-lg p-5 grid grid-cols-1 md:grid-cols-2 gap-3">
          <input className="border rounded-lg px-3 py-2" placeholder="Name" onChange={e=>setForm({...form, customer_name:e.target.value})} required />
          <input className="border rounded-lg px-3 py-2" placeholder="Mobile Number" onChange={e=>setForm({...form, mobile_number:e.target.value})} required />
          <input className="border rounded-lg px-3 py-2" placeholder="Address" onChange={e=>setForm({...form, address:e.target.value})} />
          <input className="border rounded-lg px-3 py-2" type="date" onChange={e=>setForm({...form, dob:e.target.value})} />
          <input className="border rounded-lg px-3 py-2" type="number" min="1" value={form.number_of_persons} onChange={e=>setForm({...form, number_of_persons:e.target.value})} />
          <select className="border rounded-lg px-3 py-2" onChange={e=>setForm({...form, ticket_type:e.target.value})}>
            <option value="full_park">Full Park Ticket</option>
            <option value="ten_activities">10 Activities Ticket</option>
          </select>
          <input className="border rounded-lg px-3 py-2" type="number" min="1" step="0.01" placeholder="Total Amount" onChange={e=>setForm({...form, total_amount:e.target.value})} required />
          <select className="border rounded-lg px-3 py-2" onChange={e=>setForm({...form, payment_mode:e.target.value})}>
            <option value="cash">Cash</option>
            <option value="upi">UPI</option>
            <option value="card">Card</option>
          </select>
          <div className="md:col-span-2 bg-green-50 border border-green-200 rounded-lg p-3 text-forest font-medium">{bandInstruction}</div>
          <button className="md:col-span-2 bg-forest text-white py-2 rounded-lg hover:bg-leaf transition">Generate Ticket</button>
        </form>
        {message && <p className="mt-4 bg-white p-3 rounded-lg text-green-700">{message}</p>}
      </div>
    </div>
  )
}
