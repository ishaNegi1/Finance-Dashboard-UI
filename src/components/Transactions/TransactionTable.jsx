import { useFinance } from "../../context/FinanceContext";

const TransactionTable = () => {
  const { transactions, deleteTransaction, role, search, filterType, selectedMonth, selectedYear } = useFinance();
  
  const filtered = transactions
  .filter((t) => {
    const [year, month] = t.date.split("-");
    return (
      (selectedMonth === "all" || month === selectedMonth) &&
      (selectedYear === "all" || year === selectedYear)
    );
  })
  .filter((t) =>
    t.description.toLowerCase().includes(search.toLowerCase())
  )
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
  {filtered.length === 0 ? (
    <tr>
      <td colSpan="6" className="text-center p-4 text-gray-500">
        No transactions found
      </td>
    </tr>
  ) : (
    filtered.map((t) => (
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
    ))
  )}
</tbody>
    </table>
  );
};

export default TransactionTable;