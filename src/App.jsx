import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FinanceProvider } from "./context/FinanceContext";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import InsightsPage from "./pages/InsightsPage";
import Navbar from "./components/UI/Navbar";
import Sidebar from "./components/UI/Sidebar";
import Footer from "./components/UI/Footer";

function App() {
  return (
    <FinanceProvider>
      <BrowserRouter>
        <div className="flex">
          <Sidebar />

          <div className="flex-1 min-h-screen bg-gray-100 dark:bg-gray-900 dark:text-white flex flex-col">
            <Navbar />

            <div className="flex-1">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/transactions" element={<Transactions />} />
                <Route path="/insights" element={<InsightsPage />} />
              </Routes>
            </div>

            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </FinanceProvider>
  );
}

export default App;
