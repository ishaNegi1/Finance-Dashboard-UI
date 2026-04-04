import { useState, useEffect } from "react";
import { useFinance } from "../../context/FinanceContext";

const EditTransactionModal = ({ transaction, onClose }) => {
  const { updateTransaction } = useFinance();
  const [formData, setFormData] = useState(transaction);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateTransaction({
      ...formData,
      amount: Number(formData.amount),
    });
    onClose();
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
      <div className="bg-white dark:bg-gray-800 w-full max-w-md p-6 rounded-2xl shadow-xl">
        <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white text-center">
          Edit Transaction
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="date"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            className="border border-gray-300 dark:border-gray-600 p-2 rounded-md 
            bg-white dark:bg-gray-700 dark:text-white
            focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="text"
            placeholder="Description"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            className="border border-gray-300 dark:border-gray-600 p-2 rounded-md 
            bg-white dark:bg-gray-700 dark:text-white
            focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="text"
            placeholder="Category"
            value={formData.category}
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
            className="border border-gray-300 dark:border-gray-600 p-2 rounded-md 
            bg-white dark:bg-gray-700 dark:text-white
            focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="number"
            placeholder="Amount"
            value={formData.amount}
            onChange={(e) =>
              setFormData({ ...formData, amount: e.target.value })
            }
            className="border border-gray-300 dark:border-gray-600 p-2 rounded-md 
            bg-white dark:bg-gray-700 dark:text-white
            focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <select
            value={formData.type}
            onChange={(e) => setFormData({ ...formData, type: e.target.value })}
            className="border border-gray-300 dark:border-gray-600 p-2 rounded-md 
            bg-white dark:bg-gray-700 dark:text-white
            focus:outline-none focus:ring-2 focus:ring-purple-400"
          >
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>

          <div className="flex flex-col sm:flex-row justify-between gap-3 mt-3">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded-md transition"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 rounded-md transition"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditTransactionModal;
