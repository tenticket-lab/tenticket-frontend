import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid
} from 'recharts'

const COLORS = [
  '#10b981',
  '#06b6d4',
  '#f59e0b'
]

export default function RevenueAnalytics() {
  const revenueData = [
    {
      name: 'Cash',
      value: 18000
    },
    {
      name: 'UPI',
      value: 20000
    },
    {
      name: 'Card',
      value: 7000
    }
  ]

  const dailyRevenue = [
    {
      day: 'Mon',
      revenue: 12000
    },
    {
      day: 'Tue',
      revenue: 18000
    },
    {
      day: 'Wed',
      revenue: 15000
    },
    {
      day: 'Thu',
      revenue: 22000
    },
    {
      day: 'Fri',
      revenue: 27000
    },
    {
      day: 'Sat',
      revenue: 32000
    },
    {
      day: 'Sun',
      revenue: 28000
    }
  ]

  const totalRevenue = revenueData.reduce(
    (acc, item) => acc + item.value,
    0
  )

  return (
    <div className="grid grid-cols-1 2xl:grid-cols-2 gap-6">
      {/* REVENUE DISTRIBUTION */}
      <div className="relative rounded-3xl p-[1px] bg-gradient-to-br from-orange-500 via-violet-500 to-cyan-500 shadow-[0_0_80px_rgba(168,85,247,0.35),0_0_40px_rgba(249,115,22,0.25)]">
        <div className="rounded-3xl bg-white backdrop-blur-xl border border-white/5 p-6 h-full">
          {/* HEADER */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-black">
                Revenue Distribution
              </h2>

              <p className="text-slate-400 text-sm mt-1">
                Payment source analytics
              </p>
            </div>

            <div className="px-4 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
              <p className="text-xs text-slate-400">
                Total Revenue
              </p>

              <h3 className="text-lg font-bold text-emerald-400">
                ₹ {totalRevenue.toLocaleString()}
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-center">

            <div className="relative h-[260px] sm:h-[320px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={revenueData}
                    cx="50%"
                    cy="50%"
                    innerRadius={85}
                    outerRadius={120}
                    paddingAngle={5}
                    dataKey="value"
                    stroke="none"
                  >
                    {revenueData.map(
                      (item, index) => (
                        <Cell
                          key={item.name}
                          fill={
                            COLORS[
                              index % COLORS.length
                            ]
                          }
                        />
                      )
                    )}
                  </Pie>

                  <Tooltip
                    contentStyle={{
                      background:
                        '#0f172a',
                      border:
                        '1px solid #334155',
                      borderRadius: '12px',
                      color: '#fff'
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>

              {/* CENTER CONTENT */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <p className="text-slate-400 text-sm">
                  Revenue
                </p>

                <h2 className="text-2xl sm:text-4xl4xl font-bold text-black mt-1">
                  ₹ {totalRevenue.toLocaleString()}
                </h2>

                <div className="mt-3 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-xs font-medium">
                  +18.2% This Week
                </div>
              </div>
            </div>

            {/* ANALYTICS CARDS */}
<div className="space-y-1">
  {revenueData.map(
    (item, index) => {
      const percentage = (
        (item.value / totalRevenue) *
        100
      ).toFixed(1)

      return (
        <div
          key={item.name}
          className="relative rounded-2xl border border-white/10 p-3 hover:scale-[1.02] transition-all duration-300"
          style={{
            boxShadow:
              index === 0
                ? '0 0 30px rgba(249,115,22,0.25)'
                : index === 1
                ? '0 0 30px rgba(168,85,247,0.25)'
                : '0 0 30px rgba(59,130,246,0.25)'
          }}
        >
          {/* GLOW EFFECT */}
          <div
            className="absolute inset-0 rounded-2xl opacity-20 blur-2xl"
            style={{
              background:
                index === 0
                  ? 'rgba(249,115,22,0.35)'
                  : index === 1
                  ? 'rgba(168,85,247,0.35)'
                  : 'rgba(59,130,246,0.35)'
            }}
          />

          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div
                className="w-5 h-5 rounded-full shadow-lg"
                style={{
                  backgroundColor:
                    COLORS[index]
                }}
              />

              <div>
                <p className="text-black font-semibold text-lg">
                  {item.name}
                </p>

                <p className="text-slate-400 text-sm">
                  Payment Method
                </p>
              </div>
            </div>

            <div className="text-right">
              <p className="text-black font-bold text-2xl">
                ₹{' '}
                {item.value.toLocaleString()}
              </p>

              <p className="text-slate-400 text-sm mt-1">
                {percentage}% of total
              </p>
            </div>
          </div>
        </div>
      )
    }
  )}

              {/* QUICK SUMMARY */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="relative rounded-2xl border border-emerald-500/20 p-4"
style={{
  boxShadow:
    '0 0 30px rgba(249,115,22,0.18)'
}}>
                  <p className="text-slate-400 text-sm">
                    Highest Source
                  </p>

                  <h3 className="text-black text-xl font-bold mt-1">
                    UPI
                  </h3>
                </div>

                <div className="relative rounded-2xl border border-cyan-500/20 p-4"
style={{
  boxShadow:
    '0 0 30px rgba(168,85,247,0.18)'
}}>
                  <p className="text-slate-400 text-sm">
                    Transactions
                  </p>

                  <h3 className="text-black text-xl font-bold mt-1">
                    1,245
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* WEEKLY REVENUE */}
      <div className="relative rounded-3xl p-[1px] bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-500 shadow-[0_0_40px_rgba(59,130,246,0.15)]">
        <div className="rounded-3xl bg-white backdrop-blur-xl border border-white/5 p-6 h-full">
          {/* HEADER */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-black">
                Weekly Revenue
              </h2>

              <p className="text-slate-400 text-sm mt-1">
                Revenue performance overview
              </p>
            </div>

            <div className="px-4 py-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
              <p className="text-xs text-slate-400">
                Growth
              </p>

              <h3 className="text-lg font-bold text-cyan-400">
                +12.4%
              </h3>
            </div>
          </div>

          {/* BAR GRAPH */}
          <div className="h-[360px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={dailyRevenue}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="#1e293b"
                />

                <XAxis
                  dataKey="day"
                  stroke="#94a3b8"
                />

                <YAxis
                  stroke="#94a3b8"
                />

                <Tooltip
                  contentStyle={{
                    background:
                      '#0f172a',
                    border:
                      '1px solid #334155',
                    borderRadius:
                      '12px',
                    color: '#fff'
                  }}
                />

                <Bar
                  dataKey="revenue"
                  radius={[12, 12, 0, 0]}
                  fill="#10b981"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  )
}