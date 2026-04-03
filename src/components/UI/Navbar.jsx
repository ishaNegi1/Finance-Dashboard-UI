import { useFinance } from "../../context/FinanceContext";
import DateFilter from "./DateFilter";

const Navbar = () => {
  const { role, setRole, darkMode, setDarkMode } = useFinance();

  return (
    <div className="flex justify-between items-center p-4 bg-white dark:bg-gray-800 dark:text-white shadow">
      <h1 className="text-xl font-bold">Finance Dashboard</h1>

      <div className="flex gap-4 items-center">
        <DateFilter />

        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="border p-2 rounded dark:bg-gray-700 dark:text-white"
        >
          <option value="viewer">Viewer</option>
          <option value="admin">Admin</option>
        </select>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="bg-gray-200 dark:bg-gray-600 px-3 py-2 rounded"
        >
          {darkMode ? "Light" : "Dark"}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
