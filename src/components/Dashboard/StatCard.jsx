import ArrowDownward from "@mui/icons-material/ArrowDownward";
import ArrowUpward from "@mui/icons-material/ArrowUpward";
import MoreHoriz from "@mui/icons-material/MoreHoriz";

const StatCard = ({ title, value, change, positive, icon }) => {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-md w-full min-w-[200px]">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-5 text-sm text-gray-500">
        {/* Left: Icon + Title */}
        <div className="flex items-center gap-2">
          {icon}
          <span>{title}</span>
        </div>
        {/* Right: Settings icon */}
        <MoreHoriz className="cursor-pointer text-gray-400" />
      </div>

      {/* Value */}
      <div className="text-2xl md:text-3xl font-bold text-gray-800">{value}</div>

      {/* Change indicator */}
      <div
        className={`flex items-center text-sm mt-1 ${
          positive ? "text-green-600" : "text-red-500"
        }`}
      >
        {positive ? (
          <ArrowUpward fontSize="small" />
        ) : (
          <ArrowDownward fontSize="small" />
        )}
        <span>{change}</span>
        <span className="ml-1 text-gray-400">vs last month</span>
      </div>
    </div>
  );
};

export default StatCard;
