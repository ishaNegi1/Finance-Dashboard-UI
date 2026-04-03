import { useFinance } from "../../context/FinanceContext";

const Insights = () => {
  const { transactions } = useFinance();

  const expenses = transactions.filter((t) => t.type === "expense");

  const totalExpense = expenses.reduce((sum, t) => sum + t.amount, 0);

  const categoryMap = {};
  expenses.forEach((t) => {
    categoryMap[t.category] = (categoryMap[t.category] || 0) + t.amount;
  });

  const highestCategory = Object.keys(categoryMap).reduce((a, b) =>
    categoryMap[a] > categoryMap[b] ? a : b
  , "None");

  const highestExpense = Math.max(...expenses.map((t) => t.amount), 0);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-white p-4 rounded-2xl shadow">
        <h3 className="text-gray-500">Total Expense</h3>
        <p className="text-xl font-bold mt-2">₹ {totalExpense}</p>
      </div>

      <div className="bg-white p-4 rounded-2xl shadow">
        <h3 className="text-gray-500">Highest Spending Category</h3>
        <p className="text-xl font-bold mt-2">{highestCategory}</p>
      </div>

      <div className="bg-white p-4 rounded-2xl shadow">
        <h3 className="text-gray-500">Highest Expense</h3>
        <p className="text-xl font-bold mt-2">₹ {highestExpense}</p>
      </div>
    </div>
  );
};

export default Insights;