import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell
} from 'recharts'
import Header from '../../../shared/components/layout/Header'
import Footer from '../../../shared/components/layout/Footer'

const COLORS = [
  '#10b981',
  '#8b5cf6',
  '#f97316',
  '#06b6d4'
]

export default function ReportsPage({
  onNavigate
}) {
  const monthlySales = [
    { month: 'Jan', sales: 120000 },
    { month: 'Feb', sales: 145000 },
    { month: 'Mar', sales: 172000 },
    { month: 'Apr', sales: 160000 },
    { month: 'May', sales: 210000 },
    { month: 'Jun', sales: 240000 }
  ]

  const yearlySales = [
    { year: '2022', revenue: 1200000 },
    { year: '2023', revenue: 1680000 },
    { year: '2024', revenue: 2140000 },
    { year: '2025', revenue: 2870000 }
  ]

  const counterRevenue = [
    {
      name: 'Counter 1',
      value: 420000
    },
    {
      name: 'Counter 2',
      value: 350000
    },
    {
      name: 'Counter 3',
      value: 510000
    },
    {
      name: 'Counter 4',
      value: 280000
    }
  ]

  return (
    <div className="min-h-screen flex flex-col bg-[#f5f7fb]">
    <Header
      onNavigate={onNavigate}
      activePage="reports"
    />
    <main className="flex-1 p-6">
      <div className="max-w-7xl mx-auto">
        {/* PAGE HEADER */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-4xl font-bold font-bold text-black">
            Reports & Analytics
          </h1>

          <p className="text-gray-600 mt-2">
            Monthly, yearly and counter-wise revenue insights
          </p>
        </div>

        {/* TOP STATS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 gap-5 mb-8">
          <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-[0_0_30px_rgba(249,115,22,0.12)]">
            <p className="text-gray-500 text-sm">
              Monthly Revenue
            </p>

            <h2 className="text-3xl font-bold text-black mt-2">
              ₹ 2.4L
            </h2>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-[0_0_30px_rgba(168,85,247,0.12)]">
            <p className="text-gray-500 text-sm">
              Yearly Revenue
            </p>

            <h2 className="text-3xl font-bold text-black mt-2">
              ₹ 28.7L
            </h2>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-[0_0_30px_rgba(59,130,246,0.12)]">
            <p className="text-gray-500 text-sm">
              Total Tickets
            </p>

            <h2 className="text-3xl font-bold text-black mt-2">
              18,420
            </h2>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-[0_0_30px_rgba(16,185,129,0.12)]">
            <p className="text-gray-500 text-sm">
              Best Counter
            </p>

            <h2 className="text-3xl font-bold text-black mt-2">
              Counter 3
            </h2>
          </div>
        </div>

        {/* CHARTS */}
        <div className="grid grid-cols-1 2xl:grid-cols-2 gap-6">
          {/* MONTHLY SALES */}
          <div className="bg-white rounded-3xl border border-gray-x200 p-6 shadow-[0_0_40px_rgba(249,115,22,0.10)]">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-black">
                Monthly Sales
              </h2>

              <p className="text-gray-500 mt-1">
                Revenue growth month-wise
              </p>
            </div>

            <div className="h-[350px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthlySales}>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="#e5e7eb"
                  />

                  <XAxis
                    dataKey="month"
                    stroke="#6b7280"
                  />

                  <YAxis stroke="#6b7280" />

                  <Tooltip />

                  <Bar
                    dataKey="sales"
                    radius={[10, 10, 0, 0]}
                    fill="#10b981"
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* YEARLY SALES */}
          <div className="bg-white rounded-3xl border border-gray-200 p-6 shadow-[0_0_40px_rgba(168,85,247,0.10)]">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-black">
                Yearly Revenue
              </h2>

              <p className="text-gray-500 mt-1">
                Annual revenue analytics
              </p>
            </div>

            <div className="h-[350px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={yearlySales}>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="#e5e7eb"
                  />

                  <XAxis
                    dataKey="year"
                    stroke="#6b7280"
                  />

                  <YAxis stroke="#6b7280" />

                  <Tooltip />

                  <Line
                    type="monotone"
                    dataKey="revenue"
                    stroke="#8b5cf6"
                    strokeWidth={4}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* COUNTER REPORTS */}
        <div className="mt-6 bg-white rounded-3xl border border-gray-200 p-6 shadow-[0_0_40px_rgba(59,130,246,0.10)]">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-black">
              Ticket Counter Revenue
            </h2>

            <p className="text-gray-500 mt-1">
              Revenue distribution across all counters
            </p>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-center">
            {/* PIE CHART */}
            <div className="h-[350px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={counterRevenue}
                    cx="50%"
                    cy="50%"
                    innerRadius={80}
                    outerRadius={120}
                    paddingAngle={4}
                    dataKey="value"
                  >
                    {counterRevenue.map(
                      (entry, index) => (
                        <Cell
                          key={index}
                          fill={
                            COLORS[
                              index % COLORS.length
                            ]
                          }
                        />
                      )
                    )}
                  </Pie>

                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* COUNTER LIST */}
            <div className="space-y-4">
              {counterRevenue.map(
                (counter, index) => (
                  <div
                    key={counter.name}
                    className="rounded-2xl border border-gray-200 p-5 shadow-sm"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-4 h-4 rounded-full"
                          style={{
                            backgroundColor:
                              COLORS[index]
                          }}
                        />

                        <div>
                          <h3 className="font-semibold text-black">
                            {counter.name}
                          </h3>

                          <p className="text-gray-500 text-sm">
                            Ticket Collection
                          </p>
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold text-black">
                        ₹{' '}
                        {counter.value.toLocaleString()}
                      </h3>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
      </main>
      <Footer />
    </div>
    
  )
}