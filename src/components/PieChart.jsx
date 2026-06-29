import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { pieData } from "../data/Data";

const COLORS = ["#2563eb", "#10b981", "#f59e0b"];

function PieChartComponent() {
  return (
    <div className="bg-white p-5 rounded-xl shadow-md h-[350px] w-full">
      <h2 className="text-xl font-semibold mb-4">
        Device Usage
      </h2>

      <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={pieData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={120}
          label
        >
          {pieData.map((entry, index) => (
            <Cell
              key={index}
              fill={COLORS[index % COLORS.length]}
            />
          ))}
        </Pie>

        <Tooltip />
      </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default PieChartComponent;