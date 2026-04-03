import { useFinance } from "../../context/FinanceContext";

const Filters = () => {
  const { search, setSearch, filterType, setFilterType } = useFinance();

  return (
    <div className="flex flex-col md:flex-row gap-4 mb-4">
      <input
        type="text"
        placeholder="Search transaction..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 rounded w-full md:w-1/3"
      />

      <select
        value={filterType}
        onChange={(e) => setFilterType(e.target.value)}
        className="border p-2 rounded w-full md:w-1/4"
      >
        <option value="all">All</option>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
    </div>
  );
};

export default Filters;