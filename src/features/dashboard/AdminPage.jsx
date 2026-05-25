import { useEffect, useState } from 'react'
import { getCustomersApi, getDashboardApi } from './dashboardApi'
import ParkCard from '../../shared/components/ParkCard'

export default function AdminPage({ user, token, onLogout }) {
  const [dash, setDash] = useState(null)
  const [customers, setCustomers] = useState([])

  useEffect(() => {
    Promise.all([getDashboardApi(token), getCustomersApi(token)]).then(([d, c]) => {
      setDash(d)
      setCustomers(c)
    })
  }, [token])

  if (!dash) return <div className="p-6">Loading...</div>

  const cashierEntries = Object.entries(dash.cashier_reports)

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky to-green-100 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-forest">Admin Dashboard</h2>
          <div className="text-right">
            <p className="text-sm">{user.name} ({user.role})</p>
            <button onClick={onLogout} className="text-sm text-red-600">Logout</button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <ParkCard title="Today Tickets" value={dash.today_sales.total_tickets_sold} />
          <ParkCard title="Full Park" value={dash.today_sales.full_park_tickets_count} />
          <ParkCard title="10 Activities" value={dash.today_sales.ten_activities_tickets_count} />
          <ParkCard title="Total Revenue" value={`INR ${Number(dash.revenue_reports.total_revenue).toFixed(2)}`} />
          <ParkCard title="Cash Revenue" value={`INR ${Number(dash.revenue_reports.cash_revenue).toFixed(2)}`} />
          <ParkCard title="UPI Revenue" value={`INR ${Number(dash.revenue_reports.upi_revenue).toFixed(2)}`} />
          <ParkCard title="Card Revenue" value={`INR ${Number(dash.revenue_reports.card_revenue).toFixed(2)}`} />
          <ParkCard title="Red Bands" value={dash.band_reports.red_bands_issued} />
          <ParkCard title="Blue Bands" value={dash.band_reports.blue_bands_issued} />
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-xl p-4 shadow">
            <h3 className="font-semibold text-forest mb-2">Sales by Cashier</h3>
            {cashierEntries.map(([name, s]) => (
              <div key={name} className="flex justify-between py-1 border-b text-sm">
                <span>{name}</span><span>{s.sales_count} tickets | INR {Number(s.collection).toFixed(2)}</span>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-xl p-4 shadow">
            <h3 className="font-semibold text-forest mb-2">Customer Database</h3>
            <div className="max-h-64 overflow-auto text-sm">
              {customers.map(c => (
                <div key={c.mobile_number} className="py-2 border-b">
                  <p className="font-medium">{c.customer_name} ({c.mobile_number})</p>
                  <p>DOB: {c.dob || '-'}</p>
                  <p>Visits: {c.visit_history.length}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
