import Filters from "../components/Transactions/Filters";
import TransactionTable from "../components/Transactions/TransactionTable";
import TransactionForm from "../components/Transactions/TransactionForm";

const Transactions = () => {
  return (
    <div className="p-6">
      <TransactionForm />
      <Filters />
      <TransactionTable />
    </div>
  );
};

export default Transactions;