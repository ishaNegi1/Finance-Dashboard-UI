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
      className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-2xl shadow-md mb-6 
      grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"
    >
      <input
        type="date"
        required
        className="border border-gray-300 dark:border-gray-600 p-2 rounded-md
        bg-white dark:bg-gray-700 dark:text-white
        focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={formData.date}
        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
      />

      <input
        type="text"
        placeholder="Description"
        required
        className="border border-gray-300 dark:border-gray-600 p-2 rounded-md
        bg-white dark:bg-gray-700 dark:text-white
        focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={formData.description}
        onChange={(e) =>
          setFormData({ ...formData, description: e.target.value })
        }
      />

      <select
        className="border border-gray-300 dark:border-gray-600 p-2 rounded-md
        bg-white dark:bg-gray-700 dark:text-white
        focus:outline-none focus:ring-2 focus:ring-purple-400"
        value={formData.category}
        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
      >
        <option value="">Select Category</option>
        <option value="Food">Food</option>
        <option value="Travel">Travel</option>
        <option value="Shopping">Shopping</option>
        <option value="Bills">Bills</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Salary">Salary</option>
        <option value="Freelance">Freelance</option>
        <option value="Food">Hospital</option>
        <option value="Food">Grocery</option>
      </select>

      <input
        type="number"
        placeholder="Amount"
        required
        className="border border-gray-300 dark:border-gray-600 p-2 rounded-md
        bg-white dark:bg-gray-700 dark:text-white
        focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={formData.amount}
        onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
      />

      <select
        className="border border-gray-300 dark:border-gray-600 p-2 rounded-md
        bg-white dark:bg-gray-700 dark:text-white
        focus:outline-none focus:ring-2 focus:ring-purple-400"
        value={formData.type}
        onChange={(e) => setFormData({ ...formData, type: e.target.value })}
      >
        <option value="expense">Expense</option>
        <option value="income">Income</option>
      </select>

      <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white p-2 rounded-md col-span-1 sm:col-span-2 lg:col-span-5 transition duration-200 font-semibold">
        Add Transaction
      </button>
    </form>
  );
};

export default TransactionForm;
