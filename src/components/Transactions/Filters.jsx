import { useFinance } from "../../context/FinanceContext";

const Filters = () => {
  const { search, setSearch, filterType, setFilterType } = useFinance();

  return (
    <div
      className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-md mb-10 
    flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between"
    >
      <input
        type="text"
        placeholder="Search transaction..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border border-gray-300 dark:border-gray-600 p-2 rounded-md 
        bg-white dark:bg-gray-700 dark:text-white w-full sm:w-1/2
        focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <select
        value={filterType}
        onChange={(e) => setFilterType(e.target.value)}
        className="border border-gray-300 dark:border-gray-600 p-2 rounded-md 
        bg-white dark:bg-gray-700 dark:text-white w-full sm:w-1/4
        focus:outline-none focus:ring-2 focus:ring-purple-400"
      >
        <option value="all">All</option>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
    </div>
  );
};

export default Filters;
