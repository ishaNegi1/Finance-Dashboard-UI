import { useFinance } from "../../context/FinanceContext";

const TransactionTable = ({ onEdit }) => {
  const {
    transactions,
    deleteTransaction,
    role,
    search,
    filterType,
    selectedMonth,
    selectedYear,
  } = useFinance();

  const filtered = transactions
    .filter((t) => {
      const [year, month] = t.date.split("-");
      return (
        (selectedMonth === "all" || month === selectedMonth) &&
        (selectedYear === "all" || year === selectedYear)
      );
    })
    .filter((t) => t.description.toLowerCase().includes(search.toLowerCase()))
    .filter((t) => (filterType === "all" ? true : t.type === filterType))
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-9">
      {filtered.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400">
          No transactions found
        </p>
      ) : (
        filtered.map((t) => (
          <div
            key={t.id}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-5 
            transition transform hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm text-gray-600 dark:text-gray-300">
                {new Date(t.date).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </span>

              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  t.type === "income"
                    ? "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300"
                    : "bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-300"
                }`}
              >
                {t.type}
              </span>
            </div>

            <h3 className="text-lg font-semibold text-[#0b1a33] dark:text-white">
              {t.description}
            </h3>

            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
              Category: {t.category}
            </p>

            <p
              className={`text-xl font-bold mt-3 ${
                t.type === "income" ? "text-green-500" : "text-red-500"
              }`}
            >
              ₹ {t.amount}
            </p>

            {role === "admin" && (
              <div className="flex justify-between mt-4">
                <button
                  onClick={() => onEdit(t)}
                  className="text-blue-500 hover:text-blue-700 font-medium"
                >
                  Edit
                </button>

                <button
                  onClick={() => deleteTransaction(t.id)}
                  className="text-red-500 hover:text-red-700 font-medium"
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default TransactionTable;
