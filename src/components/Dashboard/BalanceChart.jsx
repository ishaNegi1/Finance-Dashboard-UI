import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const BalanceChart = ({ data }) => {
  return (
    <div className="bg-white p-4 rounded-2xl shadow">
      <h2 className="mb-4 font-semibold">Balance Trend</h2>
      {data.length === 0 ? (
        <p className="text-gray-500">No data available for selected period</p>
      ) : (
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis
              dataKey="date"
              tickFormatter={(date) =>
                new Date(date).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "short",
                })
              }
            />

            <YAxis />
            <Tooltip
              formatter={(value) => `₹ ${value}`}
              contentStyle={{
                backgroundColor: "#1F2937",
                border: "none",
                color: "white",
              }}
            />

            <Line
              type="monotone"
              dataKey="balance"
              stroke="#3B82F6"
              strokeWidth={3}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
              label={({ value }) => `₹${value}`}
            />
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default BalanceChart;
