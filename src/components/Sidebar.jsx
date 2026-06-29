import {
  FaChartPie,
  FaHome,
  FaShoppingCart,
  FaUsers,
  FaCog,
} from "react-icons/fa";

function Sidebar() {
  return (
    <aside className="hidden md:flex md:w-64 min-h-screen bg-slate-900 text-white flex-col">

      <div className="p-6">
        <h2 className="text-xl font-bold mb-8">MENU</h2>

        <ul className="space-y-3">

          <li className="flex items-center gap-3 p-3 rounded-lg bg-blue-600 hover:bg-blue-700 cursor-pointer transition">
            <FaHome className="text-lg" />
            <span>Dashboard</span>
          </li>

          <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-700 cursor-pointer transition">
            <FaChartPie className="text-lg" />
            <span>Analytics</span>
          </li>

          <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-700 cursor-pointer transition">
            <FaShoppingCart className="text-lg" />
            <span>Orders</span>
          </li>

          <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-700 cursor-pointer transition">
            <FaUsers className="text-lg" />
            <span>Customers</span>
          </li>

          <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-700 cursor-pointer transition">
            <FaCog className="text-lg" />
            <span>Settings</span>
          </li>

        </ul>
      </div>

    </aside>
  );
}

export default Sidebar;