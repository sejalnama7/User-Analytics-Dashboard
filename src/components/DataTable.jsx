import { useState } from "react";
import { tableData } from "../data/Data";

function DataTable() {
  const [search, setSearch] = useState("");

  const filteredData = tableData.filter(
    (item) =>
      item.customer.toLowerCase().includes(search.toLowerCase()) ||
      item.product.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mt-8 border border-gray-200">

      {/* Heading + Search */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-5">
        <h2 className="text-xl font-semibold">Recent Orders</h2>

        <input
          type="text"
          placeholder="Search customer or product..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 w-full md:w-80 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[600px]">

          <thead>
            <tr className="bg-gray-100">
              <th className="py-3 px-4">Customer</th>
              <th className="py-3 px-4">Product</th>
              <th className="py-3 px-4">Amount</th>
              <th className="py-3 px-4">Status</th>
            </tr>
          </thead>

          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((item) => (
                <tr
                  key={item.id}
                  className="border-b hover:bg-blue-50 transition"
                >
                  <td className="py-3 px-4">{item.customer}</td>
                  <td className="py-3 px-4">{item.product}</td>
                  <td className="py-3 px-4">{item.amount}</td>
                  <td className="py-3 px-4">{item.status}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="4"
                  className="text-center py-6 text-gray-500"
                >
                  No orders found.
                </td>
              </tr>
            )}
          </tbody>

        </table>
      </div>
    </div>
  );
}

export default DataTable;