import { useFinance } from "../context/FinanceContext";
import SummaryCard from "../components/UI/SummaryCard";
import BalanceChart from "../components/Dashboard/BalanceChart";
import ExpensePieChart from "../components/Dashboard/ExpensePieChart";
import { calculateSummary, categoryBreakdown } from "../utils/calculations";

const Dashboard = () => {
  const { transactions } = useFinance();
  const summary = calculateSummary(transactions);
  const pieData = categoryBreakdown(transactions);

  return (
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <SummaryCard title="Balance" amount={summary.balance} />
        <SummaryCard title="Income" amount={summary.income} />
        <SummaryCard title="Expense" amount={summary.expense} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <BalanceChart data={transactions} />
        <ExpensePieChart data={pieData} />
      </div>
    </div>
  );
};

export default Dashboard;