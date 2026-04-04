import { Link, useLocation } from "react-router-dom";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const location = useLocation();

  const linkClass = (path) =>
    `block p-3 rounded-lg mb-3 transition duration-200 ${
      location.pathname === path
        ? "bg-white text-[#0b1a33] font-semibold"
        : "text-white hover:bg-white/20 hover:text-white"
    }`;

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      <div
        className={`fixed top-0 left-0 h-full w-64 z-50 
        bg-gradient-to-b from-[#0b1a33] via-[#1e3a8a] to-[#5b21b6]
        shadow-md p-4 transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        <h2 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-300 sm:mt-2 mt-4">
          Finance Dashboard
        </h2>

        <div className=" sm:mt-8 mt-14">
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
      </div>
    </>
  );
};

export default Sidebar;
