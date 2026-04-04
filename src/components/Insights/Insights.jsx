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

  const categoryMap = {};
  expenses.forEach((t) => {
    categoryMap[t.category] = (categoryMap[t.category] || 0) + t.amount;
  });

  const highestCategory =
    Object.keys(categoryMap).length > 0
      ? Object.keys(categoryMap).reduce((a, b) =>
          categoryMap[a] > categoryMap[b] ? a : b,
        )
      : "None";

  const monthlyExpense = {};

  transactions.forEach((t) => {
    const [year, month] = t.date.split("-");

    if (
      t.type === "expense" &&
      (selectedYear === "all" || year === selectedYear)
    ) {
      const key = `${year}-${month}`;
      monthlyExpense[key] = (monthlyExpense[key] || 0) + t.amount;
    }
  });

  const months = Object.keys(monthlyExpense).sort();

  let comparisonText = "Not enough data for comparison";

  if (selectedMonth !== "all" && selectedYear !== "all") {
    const current = `${selectedYear}-${selectedMonth}`;

    const dateObj = new Date(`${current}-01`);
    dateObj.setMonth(dateObj.getMonth() - 1);
    const prevMonth = dateObj.toISOString().slice(0, 7);

    if (monthlyExpense[current] && monthlyExpense[prevMonth]) {
      const diff = monthlyExpense[current] - monthlyExpense[prevMonth];

      if (diff > 0) {
        comparisonText = `Spending increased by ₹${diff} compared to last month`;
      } else {
        comparisonText = `Spending decreased by ₹${Math.abs(diff)} compared to last month`;
      }
    }
  }

  const savings = totalIncome - totalExpense;
  const savingsRate = totalIncome
    ? ((savings / totalIncome) * 100).toFixed(1)
    : 0;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-6 gap-8">
      <div className="animated-border rounded-2xl">
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 sm:text-start text-center">
          <h3 className="text-gray-600 dark:text-gray-300 text-base">
            Total Expense
          </h3>
          <p className="text-lg font-semibold mt-2 text-[#0b1a33] dark:text-white">
            ₹ {totalExpense}
          </p>
        </div>
      </div>

      <div className="animated-border rounded-2xl">
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 sm:text-start text-center">
          <h3 className="text-gray-600 dark:text-gray-300 text-base">
            Highest Spending Category
          </h3>
          <p className="text-lg font-semibold mt-2 text-[#0b1a33] dark:text-white">
            {highestCategory}
          </p>
        </div>
      </div>

      <div className="animated-border rounded-2xl">
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 sm:text-start text-center">
          <h3 className="text-gray-600 dark:text-gray-300 text-base">
            Monthly Comparison
          </h3>
          <p className="text-lg font-semibold mt-2 text-[#0b1a33] dark:text-white">
            {comparisonText}
          </p>
        </div>
      </div>

      <div className="animated-border rounded-2xl">
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 sm:text-start text-center">
          <h3 className="text-gray-600 dark:text-gray-300 text-base">
            Savings Rate
          </h3>
          <p className="text-lg font-semibold mt-2 text-[#0b1a33] dark:text-white">
            {savingsRate}% of income saved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Insights;
