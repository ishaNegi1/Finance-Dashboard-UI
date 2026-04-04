import { useFinance } from "../../context/FinanceContext";
import DateFilter from "./DateFilter";
import { FaBars } from "react-icons/fa";

const Navbar = ({ toggleSidebar }) => {
  const { role, setRole, darkMode, setDarkMode } = useFinance();

  return (
    <div className="bg-gradient-to-r from-[#0b1a33] via-[#1e3a8a] to-[#5b21b6] shadow-md px-4 sm:px-6 sm:py-4 py-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3 mb-4">
          <h1 className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-300 sm:hidden block">
            Finance Dashboard
          </h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-blue-500 hover:bg-blue-600 text-white p-1 rounded-md sm:w-full w-20 sm:hidden block ml-2 text-sm font-medium"
          >
            {darkMode ? "Light" : "Dark"}
          </button>

          <button
            className="md:hidden text-white text-2xl ml-2"
            onClick={toggleSidebar}
          >
            <FaBars />
          </button>
        </div>

        <div className="hidden md:flex gap-3 items-center">
          <DateFilter />

          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="border border-gray-300 p-2 rounded-md bg-white text-gray-700 dark:bg-gray-800 dark:text-white text-sm"
          >
            <option value="viewer">Viewer</option>
            <option value="admin">Admin</option>
          </select>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-base font-medium"
          >
            {darkMode ? "Light" : "Dark"}
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-3 mt-3 md:hidden">
        <DateFilter />

        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="border border-gray-300 p-2 rounded-md bg-white text-gray-700 dark:bg-gray-800 dark:text-white text-sm w-1/3 mx-auto"
        >
          <option value="viewer">Viewer</option>
          <option value="admin">Admin</option>
        </select>
      </div>
    </div>
  );
};

export default Navbar;
