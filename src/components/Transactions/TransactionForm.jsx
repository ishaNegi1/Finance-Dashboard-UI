import { useState } from "react";
import { useFinance } from "../../context/FinanceContext";

const TransactionForm = () => {
  const { addTransaction, role } = useFinance();

  const [formData, setFormData] = useState({
    date: "",
    description: "",
    category: "",
    amount: "",
    type: "expense",
  });

  if (role !== "admin") return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    addTransaction({
      ...formData,
      amount: Number(formData.amount),
    });

    setFormData({
      date: "",
      description: "",
      category: "",
      amount: "",
      type: "expense",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 rounded-2xl shadow mb-4 grid grid-cols-1 md:grid-cols-5 gap-4"
    >
      <input
        type="date"
        required
        className="border p-2 rounded"
        value={formData.date}
        onChange={(e) =>
          setFormData({ ...formData, date: e.target.value })
        }
      />

      <input
        type="text"
        placeholder="Description"
        required
        className="border p-2 rounded"
        value={formData.description}
        onChange={(e) =>
          setFormData({ ...formData, description: e.target.value })
        }
      />

      <input
        type="text"
        placeholder="Category"
        required
        className="border p-2 rounded"
        value={formData.category}
        onChange={(e) =>
          setFormData({ ...formData, category: e.target.value })
        }
      />

      <input
        type="number"
        placeholder="Amount"
        required
        className="border p-2 rounded"
        value={formData.amount}
        onChange={(e) =>
          setFormData({ ...formData, amount: e.target.value })
        }
      />

      <select
        className="border p-2 rounded"
        value={formData.type}
        onChange={(e) =>
          setFormData({ ...formData, type: e.target.value })
        }
      >
        <option value="expense">Expense</option>
        <option value="income">Income</option>
      </select>

      <button className="bg-blue-500 text-white p-2 rounded col-span-1 md:col-span-5">
        Add Transaction
      </button>
    </form>
  );
};

export default TransactionForm;