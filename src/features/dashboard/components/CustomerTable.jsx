import SectionCard from './SectionCard'

export default function CustomerTable({
  customers
}) {
  return (
    <SectionCard title="Customer Database">
      <div className="overflow-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="border-b">
              <th className="text-left py-3">
                Customer Name
              </th>

              <th className="text-left py-3">
                Mobile Number
              </th>

              <th className="text-left py-3">
                DOB
              </th>

              <th className="text-left py-3">
                Visit History
              </th>
            </tr>
          </thead>

          <tbody>
            {customers.map(customer => (
              <tr
                key={customer.mobile}
                className="border-b hover:bg-green-50"
              >
                <td className="py-3">
                  {customer.name}
                </td>

                <td className="py-3">
                  {customer.mobile}
                </td>

                <td className="py-3">
                  {customer.dob}
                </td>

                <td className="py-3">
                  {customer.visits} Visits
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </SectionCard>
  )
}