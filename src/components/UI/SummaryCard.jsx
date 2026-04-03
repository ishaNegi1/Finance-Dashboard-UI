const SummaryCard = ({ title, amount }) => {
  const getColor = () => {
    if (title === "Income") return "text-green-600";
    if (title === "Expense") return "text-red-600";
    return "text-blue-600";
  };

  return (
    <div className="bg-white shadow-md rounded-2xl p-5">
      <h3 className="text-gray-500 text-sm">{title}</h3>
      <p className={`text-2xl font-bold mt-2 ${getColor()}`}>
        ₹ {amount}
      </p>
    </div>
  );
};

export default SummaryCard;