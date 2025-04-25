import Header from "./Header";
import StatCard from "./StatCard";
import KPIChart from "./KPIChart";
import AttendanceTable from "./AttendanceTable";
import People from "@mui/icons-material/People";
import MonetizationOn from "@mui/icons-material/MonetizationOn";
import TrendingDown from "@mui/icons-material/TrendingDown";
import CalendarMonth from "@mui/icons-material/CalendarMonth";
import Task from "./Tasks/Task";

const DashboardOverview = ({ onMenuClick }) => {
  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-6">
        <Header onMenuClick={onMenuClick} />
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatCard
          title="Total Employee"
          value="323"
          change="10%"
          positive={true}
          icon={<People className="text-blue-500" />}
        />
        <StatCard
          title="Total Revenue"
          value="$8,903.44"
          change="5%"
          positive={true}
          icon={<MonetizationOn className="text-green-500" />}
        />
        <StatCard
          title="Turnover Rate"
          value="8%"
          change="1%"
          positive={false}
          icon={<TrendingDown className="text-red-500" />}
        />
        <StatCard
          title="Attendance Rate"
          value="94%"
          change="5%"
          positive={false}
          icon={<CalendarMonth className="text-indigo-500" />}
        />
      </div>

      {/* KPI Chart + Attendance Table */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-1.5 w-full">
        <div className="w-full md:w-2/5">
          <KPIChart />
        </div>
        <div className="w-full md:w-3/5">
          <AttendanceTable />
        </div>
      </div>
    <div className="w-full bg-white p-4 rounded-lg shadow-md mt-6">
      <Task />
    </div>
    </div>
  );
};

export default DashboardOverview;
