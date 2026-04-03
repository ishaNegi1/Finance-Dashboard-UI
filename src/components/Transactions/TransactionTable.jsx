import { useFinance } from "../../context/FinanceContext";

const TransactionTable = () => {
  const { transactions, deleteTransaction, role, search, filterType } = useFinance();

  const filtered = transactions
    .filter((t) => t.description.toLowerCase().includes(search.toLowerCase()))
    .filter((t) => (filterType === "all" ? true : t.type === filterType));

  return (
    <table className="w-full bg-white shadow rounded-2xl">
      <thead>
        <tr className="border-b">
          <th>Date</th>
          <th>Description</th>
          <th>Category</th>
          <th>Amount</th>
          <th>Type</th>
          {role === "admin" && <th>Action</th>}
        </tr>
      </thead>
      <tbody>
        {filtered.map((t) => (
          <tr key={t.id} className="text-center border-b">
            <td>{t.date}</td>
            <td>{t.description}</td>
            <td>{t.category}</td>
            <td>₹ {t.amount}</td>
            <td>{t.type}</td>
            {role === "admin" && (
              <td>
                <button
                  onClick={() => deleteTransaction(t.id)}
                  className="text-red-500"
                >
                  Delete
                </button>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionTable;