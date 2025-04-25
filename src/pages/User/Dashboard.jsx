import React, { useState } from "react";
import Sidebar from "../../components/Dashboard/Sidebar";
import DashboardOverview from "../../components/Dashboard/DashboardOverview";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="relative min-h-screen bg-gray-100">
      {/* Fixed Sidebar (desktop) */}
      {sidebarOpen && (
        <div className="hidden md:block fixed top-0 left-0 w-64 h-screen bg-white border-r shadow z-20">
          <Sidebar />
        </div>
      )}

      {/* Mobile Sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute w-64 h-full bg-white shadow-lg z-50">
            <Sidebar />
          </div>
          <div
            className="absolute inset-0 bg-black bg-opacity-30"
            onClick={() => setSidebarOpen(false)}
          />
        </div>
      )}

      {/* Main content */}
      <div
        className={`transition-all duration-300 h-screen overflow-y-auto ${
          sidebarOpen ? "md:ml-64" : "md:ml-0"
        } md:p-3`}
      >
        <DashboardOverview onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
      </div>
    </div>
  );
};

export default Dashboard;
