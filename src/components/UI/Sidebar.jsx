import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  const linkClass = (path) =>
    `block p-3 rounded-lg mb-2 ${
      location.pathname === path
        ? "bg-blue-500 text-white"
        : "text-gray-700 hover:bg-gray-200"
    }`;

  return (
    <div className="w-64 h-screen bg-white shadow-md p-4">
      <h2 className="text-2xl font-bold mb-6">Finance</h2>

      <Link to="/" className={linkClass("/")}>
        Dashboard
      </Link>
      <Link to="/transactions" className={linkClass("/transactions")}>
        Transactions
      </Link>
      <Link to="/insights" className={linkClass("/insights")}>
        Insights
      </Link>
    </div>
  );
};

export default Sidebar;