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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl w-96 shadow-lg">
        <h2 className="text-xl font-bold mb-4">Edit Transaction</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="date"
            value={formData.date}
            onChange={(e) =>
              setFormData({ ...formData, date: e.target.value })
            }
            className="border p-2 rounded dark:bg-gray-700"
          />

          <input
            type="text"
            placeholder="Description"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            className="border p-2 rounded dark:bg-gray-700"
          />

          <input
            type="text"
            placeholder="Category"
            value={formData.category}
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
            className="border p-2 rounded dark:bg-gray-700"
          />

          <input
            type="number"
            placeholder="Amount"
            value={formData.amount}
            onChange={(e) =>
              setFormData({ ...formData, amount: e.target.value })
            }
            className="border p-2 rounded dark:bg-gray-700"
          />

          <select
            value={formData.type}
            onChange={(e) =>
              setFormData({ ...formData, type: e.target.value })
            }
            className="border p-2 rounded dark:bg-gray-700"
          >
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>

          <div className="flex justify-between mt-3">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-400 px-4 py-2 rounded"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
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