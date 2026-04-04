import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#0b1a33] via-[#1e3a8a] to-[#5b21b6] text-gray-200 mt-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:py-4 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 sm:gap-20 gap-8 text-center">
          <div>
            <h2 className="text-lg font-semibold mb-2 text-white">
              Finance Dashboard
            </h2>
            <p className="text-sm text-gray-100 leading-relaxed">
              A finance tracking dashboard to monitor income, expenses, and
              spending patterns with interactive charts and insights.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2 text-white">
              Quick Links
            </h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/"
                  className="hover:underline hover:text-gray-200 transition"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  to="/transactions"
                  className="hover:underline hover:text-gray-200 transition"
                >
                  Transactions
                </Link>
              </li>
              <li>
                <Link
                  to="/insights"
                  className="hover:underline hover:text-gray-200 transition"
                >
                  Insights
                </Link>
              </li>
            </ul>
          </div>

          <div className=" text-center">
            <h2 className="text-lg font-semibold mb-2 text-white">Contact</h2>
            <div className="flex items-center gap-5 mt-3 justify-center">
              <a
                href="https://github.com/ishaNegi1"
                target="_blank"
                rel="noreferrer"
                className="text-2xl hover:scale-110 transition transform"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/isha-negi-791a33296/"
                target="_blank"
                rel="noreferrer"
                className="text-2xl hover:scale-110 transition transform"
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:negi.isha98@gmail.com"
                className="text-2xl hover:scale-110 transition transform"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/30 mt-8 pt-4 text-center text-sm text-gray-100">
          <p>Built with React, Tailwind CSS, Recharts & Context API</p>
          <p className="mt-1">© {new Date().getFullYear()} Finance Dashboard</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
