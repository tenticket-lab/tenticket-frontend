import Header from '../../shared/components/layout/Header'
import Footer from '../../shared/components/layout/Footer'

import DashboardHeader from './components/DashboardHeader'
import StatsCard from './components/StatsCard'
import CashierSection from './components/CashierSection'
import CustomerTable from './components/CustomerTable'
import RevenueAnalytics from './components/RevenueAnalytics'

export default function AdminPage({
  user,
  onLogout,
  onNavigate
}) {
  const stats = [
    {
      title: 'Total Tickets Sold',
      value: 245
    },
    {
      title: 'Full Park Tickets',
      value: 120
    },
    {
      title: '10 Activities Tickets',
      value: 85
    },
    {
      title: 'Total Revenue',
      value: '₹ 45,000'
    },
    {
      title: 'Cash Revenue',
      value: '₹ 18,000'
    },
    {
      title: 'UPI Revenue',
      value: '₹ 20,000'
    },
    {
      title: 'Card Revenue',
      value: '₹ 7,000'
    },
    {
      title: 'Red Bands Issued',
      value: 110
    },
    {
      title: 'Blue Bands Issued',
      value: 135
    }
  ]

  const cashiers = [
    {
      name: 'Rahul',
      sales: 45,
      collection: 12000
    },
    {
      name: 'Aman',
      sales: 38,
      collection: 9800
    },
    {
      name: 'Sneha',
      sales: 50,
      collection: 14500
    }
  ]

  const customers = [
    {
      name: 'Rohit Sharma',
      mobile: '9876543210',
      dob: '12-03-1998',
      visits: 5
    },
    {
      name: 'Priya Singh',
      mobile: '9988776655',
      dob: '22-08-2000',
      visits: 3
    },
    {
      name: 'Amit Verma',
      mobile: '9090909090',
      dob: '15-11-1995',
      visits: 7
    }
  ]

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-sky-100 via-green-50 to-green-200">
      <Header 
      onNavigate={onNavigate}
      activePage="dashboard"
      />

      <main className="flex-1 px-4 py-5 sm:p-6">
        <div className="max-w-7xl mx-auto">
          <DashboardHeader
            user={user}
            onLogout={onLogout}
          />

          {/* TODAY SALES */}
          <h2 className="sm:text-2xl font-bold text-emerald-900 mb-4">
            Today’s Sales
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5">
            {stats.slice(0, 3).map(stat => (
              <StatsCard
                key={stat.title}
                title={stat.title}
                value={stat.value}
              />
            ))}
          </div>

          {/* REVENUE REPORTS */}
          <h2 className="sm:text-2xl font-bold text-emerald-400 mb-4">
  Revenue Analytics
</h2>

<div className="mb-10">
  <RevenueAnalytics />
</div>

          {/* BAND REPORTS */}
          <h2 className="sm:text-2xl font-bold text-emerald-900 mb-4">
            Band Reports
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
            {stats.slice(7, 9).map(stat => (
              <StatsCard
                key={stat.title}
                title={stat.title}
                value={stat.value}
              />
            ))}
          </div>

          {/* CASHIER + CUSTOMER */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <CashierSection cashiers={cashiers} />

            <CustomerTable customers={customers} />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}