import { useFinance } from "../context/FinanceContext";
import SummaryCard from "../components/UI/SummaryCard";
import BalanceChart from "../components/Dashboard/BalanceChart";
import ExpensePieChart from "../components/Dashboard/ExpensePieChart";
import MonthlyExpenseChart from "../components/Dashboard/MonthlyExpenseChart";
import {
  calculateSummary,
  categoryBreakdown,
  expenseFrequency,
  monthlyExpenses,
  getBalanceTrend,
} from "../utils/calculations";
import ExpenseFrequencyChart from "../components/Dashboard/ExpenseFrequencyChart";

const Dashboard = () => {
  const { transactions, selectedMonth, selectedYear } = useFinance();

  const filteredTransactions = transactions.filter((t) => {
    const [year, month] = t.date.split("-");
    return (
      (selectedMonth === "all" || month === selectedMonth) &&
      (selectedYear === "all" || year === selectedYear)
    );
  });

  const summary = calculateSummary(filteredTransactions);
  const pieData = categoryBreakdown(filteredTransactions);
  const frequencyData = expenseFrequency(filteredTransactions);
  const monthlyExpenseData = monthlyExpenses(transactions, selectedYear);
  const balanceData = getBalanceTrend(filteredTransactions);

  return (
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <SummaryCard title="Balance" amount={summary.balance} />
        <SummaryCard title="Income" amount={summary.income} />
        <SummaryCard title="Expense" amount={summary.expense} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <BalanceChart data={balanceData} />
        <ExpensePieChart data={pieData} />
        <ExpenseFrequencyChart data={frequencyData} />
        <MonthlyExpenseChart data={monthlyExpenseData} />
      </div>
    </div>
  );
};

export default Dashboard;
