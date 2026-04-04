import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 border-t dark:border-gray-700 mt-6">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-600 dark:text-gray-300">
          
          <div>
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
              Finance Dashboard
            </h2>
            <p className="text-sm">
              A finance tracking dashboard to monitor income, expenses, and
              spending patterns with interactive charts and insights.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
              Quick Links
            </h2>
            <ul className="space-y-1 text-sm">
              <li>
                <Link to="/" className="hover:text-blue-500">Dashboard</Link>
              </li>
              <li>
                <Link to="/transactions" className="hover:text-blue-500">Transactions</Link>
              </li>
              <li>
                <Link to="/insights" className="hover:text-blue-500">Insights</Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
              Contact
            </h2>
            <div className="flex items-center gap-4 mt-2">
              <a
                href="https://github.com/ishaNegi1"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-500 text-xl"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/isha-negi-791a33296/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-500 text-xl"
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:negi.isha98@gmail.com"
                className="hover:text-blue-500 text-xl"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t dark:border-gray-700 mt-6 pt-4 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>Built with React, Tailwind CSS, Recharts & Context API</p>
          <p className="mt-1">
            © {new Date().getFullYear()} Finance Dashboard
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;