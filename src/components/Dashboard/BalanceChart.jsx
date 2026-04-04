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
    <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-2xl shadow-md">
      <h2 className="mb-4 font-semibold text-gray-800 dark:text-white text-lg">
        Balance Trend
      </h2>

      {data.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400">
          No data available for selected period
        </p>
      ) : (
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#9CA3AF" />

            <XAxis
              dataKey="date"
              stroke="#6B7280"
              tickFormatter={(date) =>
                new Date(date).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "short",
                })
              }
            />

            <YAxis stroke="#6B7280" />

            <Tooltip
              formatter={(value) => `₹ ${value}`}
              contentStyle={{
                backgroundColor: "#111827",
                borderRadius: "8px",
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
