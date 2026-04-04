import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

const COLORS = ["#0088FE", "#FF8042", "#00C49F"];

export default function Charts({ categoryData }) {
  return (
    <div className="flex gap-10 mt-6">

      {/* Pie Chart */}
      <PieChart width={300} height={300}>
        <Pie
          data={categoryData}
          dataKey="total"
          nameKey="category"
          outerRadius={100}
        >
          {categoryData.map((entry, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>

      {/* Bar Chart */}
      <BarChart width={400} height={300} data={categoryData}>
        <XAxis dataKey="category" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="total" fill="#8884d8" />
      </BarChart>

    </div>
  );
}