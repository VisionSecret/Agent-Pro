import Dashboard from "@mui/icons-material/Dashboard";
import Task from "@mui/icons-material/Task";
import Inbox from "@mui/icons-material/Inbox";
import CalendarMonth from "@mui/icons-material/CalendarMonth";
import People from "@mui/icons-material/People";
import AccessTime from "@mui/icons-material/AccessTime";
import Paid from "@mui/icons-material/Paid";
import BarChart from "@mui/icons-material/BarChart";
import Settings from "@mui/icons-material/Settings";
import HelpOutline from "@mui/icons-material/HelpOutline";
import Logout from "@mui/icons-material/Logout";
import { Link, NavLink } from "react-router-dom";

const menuItems = [
  { icon: <Dashboard />, label: "Dashboard", path: "/user-dashboard" },
  { icon: <Task />, label: "Task", path: "/task" },
  { icon: <Inbox />, label: "Inbox", path: "/inbox", badge: 12 },
  { icon: <CalendarMonth />, label: "Calendar", path: "/calendar" },
];

const managementItems = [
  { icon: <People />, label: "Users", path: "/users" },
  { icon: <AccessTime />, label: "Attendance", path: "/attendance" },
  { icon: <Paid />, label: "Payroll", path: "/payroll", badge: 5 },
  { icon: <BarChart />, label: "Report", path: "/report" },
];

const Sidebar = () => (
  <aside className="w-64 bg-white shadow-lg h-screen p-4">
    <Link to="/" className="flex items-center mb-6">
      <img
        src="/images/talkeenFavicon.jpeg"
        alt="Talkeen Logo"
        className="w-8 h-8 mr-2"
      />
      <h1 className="text-2xl font-bold text-[#000827]">Talkeen</h1>
    </Link>
    <div className="space-y-4">
      {/* Main Menu */}
      <nav>
        <p className="text-sm text-gray-400 uppercase">Main Menu</p>
        {menuItems.map((item, i) => (
          <NavLink
            key={i}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-2 p-2 rounded cursor-pointer ${
                isActive
                  ? "bg-gray-200 font-semibold text-blue-600"
                  : "hover:bg-gray-100"
              }`
            }
          >
            {item.icon}
            <span>{item.label}</span>
            {item.badge && (
              <span className="ml-auto bg-blue-500 text-white text-xs px-2 rounded-full">
                {item.badge}
              </span>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Management */}
      <nav>
        <p className="text-sm text-gray-400 uppercase">Management</p>
        {managementItems.map((item, i) => (
          <NavLink
            key={i}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-2 p-2 rounded cursor-pointer ${
                isActive
                  ? "bg-gray-200 font-semibold text-blue-600"
                  : "hover:bg-gray-100"
              }`
            }
          >
            {item.icon}
            <span>{item.label}</span>
            {item.badge && (
              <span className="ml-auto bg-blue-500 text-white text-xs px-2 rounded-full">
                {item.badge}
              </span>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Other Menu */}
      <nav>
        <p className="text-sm text-gray-400 uppercase">Other Menu</p>
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `flex items-center gap-2 p-2 rounded cursor-pointer ${
              isActive
                ? "bg-gray-200 font-semibold text-blue-600"
                : "hover:bg-gray-100"
            }`
          }
        >
          <Settings />
          <span>Setting</span>
        </NavLink>

        <NavLink
          to="/help"
          className={({ isActive }) =>
            `flex items-center gap-2 p-2 rounded cursor-pointer ${
              isActive
                ? "bg-gray-200 font-semibold text-blue-600"
                : "hover:bg-gray-100"
            }`
          }
        >
          <HelpOutline />
          <span>Help & Support</span>
        </NavLink>

        <NavLink
          to="/logout"
          className="flex items-center gap-2 p-2 rounded cursor-pointer hover:bg-gray-100"
        >
          <Logout />
          <span>Log Out</span>
        </NavLink>
      </nav>
    </div>
  </aside>
);

export default Sidebar;
