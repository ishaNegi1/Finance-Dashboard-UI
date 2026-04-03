import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const MonthlyExpenseChart = ({ data }) => {
  return (
    <div className="bg-white p-4 rounded-2xl shadow">
      <h2 className="mb-4 font-semibold">Monthly Spending Trend</h2>
      {data.length === 0 ? (
        <p className="text-gray-500">No data available for selected period</p>
      ) : (
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1F2937",
                border: "none",
                color: "white",
              }}
            />
            <Line type="monotone" dataKey="expense" stroke="#EF4444" />
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default MonthlyExpenseChart;
