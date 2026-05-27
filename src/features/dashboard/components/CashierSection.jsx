import SectionCard from './SectionCard'

export default function CashierSection({
  cashiers
}) {
  return (
    <SectionCard title="Cashier Reports">
      <div className="space-y-4">
        {cashiers.map(cashier => (
          <div
            key={cashier.name}
            className="border-b pb-3"
          >
            <div className="flex justify-between text-sm">
              <span className="font-medium">
                {cashier.name}
              </span>

              <span className="text-gray-500">
                {cashier.sales} Tickets
              </span>
            </div>

            <div className="text-sm text-emerald-700 mt-1">
              Collection: ₹ {cashier.collection}
            </div>
          </div>
        ))}
      </div>
    </SectionCard>
  )
}