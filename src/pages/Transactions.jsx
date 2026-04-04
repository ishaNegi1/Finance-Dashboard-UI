import { useState } from "react";
import Filters from "../components/Transactions/Filters";
import TransactionTable from "../components/Transactions/TransactionTable";
import TransactionForm from "../components/Transactions/TransactionForm";
import EditTransactionModal from "../components/Transactions/EditTransactionModal";

const Transactions = () => {
  const [selectedTx, setSelectedTx] = useState(null);

  return (
    <div className="p-6">
      <TransactionForm />
      <Filters />

      <TransactionTable onEdit={setSelectedTx} />

      {selectedTx && (
        <EditTransactionModal
          transaction={selectedTx}
          onClose={() => setSelectedTx(null)}
        />
      )}
    </div>
  );
};

export default Transactions;