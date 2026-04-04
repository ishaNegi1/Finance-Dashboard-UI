const SummaryCard = ({ title, amount }) => {
  const getColor = () => {
    if (title === "Income") return "text-green-600";
    if (title === "Expense") return "text-red-600";
    return "text-blue-600";
  };

  return (
    <div className="animated-border rounded-2xl">
      <div className="flex flex-col items-center text-center">
        <h3 className="text-[#0b1a33] text-lg dark:text-white">{title}</h3>

        <p className={`text-2xl font-bold mt-1 ${getColor()}`}>₹ {amount}</p>
      </div>
    </div>
  );
};

export default SummaryCard;
