import { useFinance } from "../../context/FinanceContext";

const DateFilter = () => {
  const { selectedMonth, setSelectedMonth, selectedYear, setSelectedYear } =
    useFinance();

  return (
    <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
      <select
        value={selectedMonth}
        onChange={(e) => setSelectedMonth(e.target.value)}
        className="border border-gray-300 p-2 rounded-md text-sm sm:text-base
        bg-white text-gray-700 dark:bg-gray-800 dark:text-white
        focus:outline-none focus:ring-2 focus:ring-blue-400
        hover:border-blue-400 transition duration-200"
      >
        <option value="all">All Months</option>
        <option value="01">Jan</option>
        <option value="02">Feb</option>
        <option value="03">Mar</option>
        <option value="04">Apr</option>
        <option value="05">May</option>
        <option value="06">Jun</option>
        <option value="07">Jul</option>
        <option value="08">Aug</option>
        <option value="09">Sep</option>
        <option value="10">Oct</option>
        <option value="11">Nov</option>
        <option value="12">Dec</option>
      </select>

      <select
        value={selectedYear}
        onChange={(e) => setSelectedYear(e.target.value)}
        className="border border-gray-300 p-2 rounded-md text-sm sm:text-base
        bg-white text-gray-700 dark:bg-gray-800 dark:text-white
        focus:outline-none focus:ring-2 focus:ring-purple-400
        hover:border-purple-400 transition duration-200"
      >
        <option value="all">All Years</option>
        <option value="2026">2026</option>
        <option value="2025">2025</option>
      </select>
    </div>
  );
};

export default DateFilter;
