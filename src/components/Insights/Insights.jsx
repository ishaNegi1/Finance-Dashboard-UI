import { useFinance } from "../../context/FinanceContext";

const Insights = () => {
  const { transactions, selectedMonth, selectedYear } = useFinance();

const filteredTransactions = transactions.filter((t) => {
  const [year, month] = t.date.split("-");
  return (
    (selectedMonth === "all" || month === selectedMonth) &&
    (selectedYear === "all" || year === selectedYear)
  );
});

  const expenses = filteredTransactions.filter((t) => t.type === "expense");
  const income = filteredTransactions.filter((t) => t.type === "income");

  const totalExpense = expenses.reduce((sum, t) => sum + t.amount, 0);
  const totalIncome = income.reduce((sum, t) => sum + t.amount, 0);

  // Highest spending category
  const categoryMap = {};
  expenses.forEach((t) => {
    categoryMap[t.category] = (categoryMap[t.category] || 0) + t.amount;
  });

  const highestCategory =
    Object.keys(categoryMap).length > 0
      ? Object.keys(categoryMap).reduce((a, b) =>
          categoryMap[a] > categoryMap[b] ? a : b
        )
      : "None";

  // Monthly comparison
  const monthlyData = {};

  filteredTransactions.forEach((t) => {
    const month = t.date.slice(0, 7); // YYYY-MM
    if (!monthlyData[month]) {
      monthlyData[month] = { income: 0, expense: 0 };
    }

    if (t.type === "income") monthlyData[month].income += t.amount;
    else monthlyData[month].expense += t.amount;
  });

  const months = Object.keys(monthlyData);

  let comparisonText = "Not enough data for comparison";
  if (months.length >= 2) {
    const lastMonth = monthlyData[months[months.length - 2]];
    const currentMonth = monthlyData[months[months.length - 1]];

    if (currentMonth.expense > lastMonth.expense) {
      comparisonText = "Spending increased compared to last month";
    } else {
      comparisonText = "Spending decreased compared to last month";
    }
  }

  // Useful observations
  const savings = totalIncome - totalExpense;
  const savingsRate = totalIncome
    ? ((savings / totalIncome) * 100).toFixed(1)
    : 0;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Total Expense */}
      <div className="bg-white p-4 rounded-2xl shadow">
        <h3 className="text-gray-500">Total Expense</h3>
        <p className="text-xl font-bold mt-2">₹ {totalExpense}</p>
      </div>

      {/* Highest Category */}
      <div className="bg-white p-4 rounded-2xl shadow">
        <h3 className="text-gray-500">Highest Spending Category</h3>
        <p className="text-xl font-bold mt-2">{highestCategory}</p>
      </div>

      {/* Monthly Comparison */}
      <div className="bg-white p-4 rounded-2xl shadow">
        <h3 className="text-gray-500">Monthly Comparison</h3>
        <p className="text-lg font-semibold mt-2">{comparisonText}</p>
      </div>

      {/* Useful Observation */}
      <div className="bg-white p-4 rounded-2xl shadow">
        <h3 className="text-gray-500">Savings Rate</h3>
        <p className="text-lg font-semibold mt-2">{savingsRate}% of income saved</p>
      </div>
    </div>
  );
};

export default Insights;