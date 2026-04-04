import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FinanceProvider } from "./context/FinanceContext";
import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import InsightsPage from "./pages/InsightsPage";
import Navbar from "./components/UI/Navbar";
import Sidebar from "./components/UI/Sidebar";
import Footer from "./components/UI/Footer";

function AppLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className=" overflow-x-hidden">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <div className="md:ml-64 min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900 dark:text-white transition-colors duration-300">
        <Navbar toggleSidebar={toggleSidebar} />

        <div className="flex-1 p-4 sm:p-6">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/insights" element={<InsightsPage />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </div>
  );
}

function App() {
  return (
    <FinanceProvider>
      <BrowserRouter>
        <AppLayout />
      </BrowserRouter>
    </FinanceProvider>
  );
}

export default App;