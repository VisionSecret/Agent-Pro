// components/Dashboard/AttendanceTable.jsx
import React from "react";
import CalendarMonth from "@mui/icons-material/CalendarMonth";
import MoreHoriz from "@mui/icons-material/MoreHoriz";
import AccessTime from "@mui/icons-material/AccessTime";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const attendanceData = [
  {
    name: "Emily Chen",
    role: "Backend Dev",
    status: "Full-time",
    checkIn: "08:00",
    checkOut: "17:00",
    scheduleIn: "08:00",
    scheduleOut: "16:00",
  },
  {
    name: "Ryan Thompson",
    role: "UX Designer",
    status: "Full-time",
    checkIn: "09:00",
    checkOut: "16:00",
    scheduleIn: "09:00",
    scheduleOut: "15:00",
  },
  {
    name: "Samantha Lee",
    role: "Project Manager",
    status: "Part-time",
    checkIn: "08:00",
    checkOut: "17:00",
    scheduleIn: "08:00",
    scheduleOut: "16:00",
  },
  {
    name: "Michael Brown",
    role: "Quality Assurance",
    status: "Part-time",
    checkIn: "10:00",
    checkOut: "14:00",
    scheduleIn: "10:00",
    scheduleOut: "14:00",
  },
  {
    name: "Jessica Davis",
    role: "HR Manager",
    status: "Full-time",
    checkIn: "08:00",
    checkOut: "17:00",
    scheduleIn: "08:00",
    scheduleOut: "16:00",
  },
  {
    name: "Kevin White",
    role: "Network Admin",
    status: "Full-time",
    checkIn: "08:00",
    checkOut: "17:00",
    scheduleIn: "08:00",
    scheduleOut: "16:00",
  },
];

const AttendanceTable = () => {
  return (
    <div className="bg-white p-3 rounded-2xl shadow-md w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-3 text-sm sticky top-0 bg-white z-10 py-2">
        <h2 className="text-xl md:text-2xl font-bold text-[#111827]">Attendance</h2>
        <MoreHoriz className="cursor-pointer text-gray-400" />
      </div>

      {/* Range buttons */}
      <div className="flex items-center justify-end mb-4">
        <div className="flex gap-2 text-sm">
          {["Day", "Week", "Month"].map((range, i) => (
            <button
              key={range}
              className={`font-medium px-3 py-1 rounded-full hover:bg-gray-200 ${
                i === 0 ? "bg-gray-200" : ""
              }`}
            >
              {range}
            </button>
          ))}
        </div>
      </div>

      {/* Desktop table */}
      <div className="hidden md:block max-h-48 overflow-y-auto scrollbar-hide">
        <table className="min-w-full table-auto text-sm text-left">
          <thead className="bg-[#F4F8FB] text-zinc-700 border-b">
            <tr>
              <th className="py-3 px-3 text-xs">
                <input type="checkbox" />
              </th>

              <th className="py-3 px-1.5 text-xs font-bold">
                <div className="flex items-center gap-1">
                  <span className="inline-block text-xs">Name</span>
                  <KeyboardArrowDownIcon
                    fontSize="small"
                    className="text-[#222827]"
                  />
                </div>
              </th>

              <th className="py-3 px-1.5 text-xs font-bold">
                <div className="flex items-center">
                  <span className="inline-block text-xs">Status</span>
                  <KeyboardArrowDownIcon
                    fontSize="small"
                    className="text-[#222827]"
                  />
                </div>
              </th>

              <th className="py-3 px-1.5 text-xs font-bold">
                <div className="flex items-center">
                  <span className="inline-block text-xs">Check In</span>
                  <KeyboardArrowDownIcon
                    fontSize="small"
                    className="text-[#222827]"
                  />
                </div>
              </th>

              <th className="py-3 px-1.5 text-xs font-bold">
                <div className="flex items-center">
                  <span className="inline-block text-xs">Check Out</span>
                  <KeyboardArrowDownIcon
                    fontSize="small"
                    className="text-[#222827]"
                  />
                </div>
              </th>

              <th className="py-3 px-1.5 text-xs font-bold">
                <div className="flex items-center">
                  <span className="inline-block text-xs">Schedule In</span>
                  <KeyboardArrowDownIcon
                    fontSize="small"
                    className="text-[#222827]"
                  />
                </div>
              </th>

              <th className="py-3 px-1.5 text-xs font-bold">
                <div className="flex items-center">
                  <span className="inline-block text-xs">Schedule Out</span>
                  <KeyboardArrowDownIcon
                    fontSize="small"
                    className="text-[#222827]"
                  />
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {attendanceData.map((emp, idx) => (
              <tr key={idx} className="border-b hover:bg-gray-50">
                {/* Checkbox */}
                <td className="py-2 px-3">
                  <input type="checkbox" />
                </td>

                {/* Name & Role */}
                <td className="py-2 px-1.5">
                  <div className="font-medium text-gray-800">{emp.name}</div>
                  <div className="text-gray-500 text-xs">{emp.role}</div>
                </td>

                {/* Status */}
                <td className="py-2 px-1.5">
                  <span
                    className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium ${
                      emp.status === "Full-time"
                        ? "bg-green-100 text-green-600"
                        : "bg-yellow-100 text-yellow-600"
                    }`}
                  >
                    {emp.status}
                  </span>
                </td>

                {/* Check In */}
                <td className="py-2 px-1.5 whitespace-nowrap">
                  <div className="flex items-center">
                    <AccessTime fontSize="small" className="text-gray-400" />
                    {emp.checkIn}
                  </div>
                </td>

                {/* Check Out */}
                <td className="py-2 px-1.5 whitespace-nowrap">
                  <div className="flex items-center">
                    <AccessTime fontSize="small" className="text-gray-400" />
                    {emp.checkOut}
                  </div>
                </td>

                {/* Schedule In */}
                <td className="py-2 px-1.5 whitespace-nowrap">
                  <div className="flex items-center">
                    <CalendarMonth fontSize="small" className="text-gray-400" />
                    {emp.scheduleIn}
                  </div>
                </td>

                {/* Schedule Out */}
                <td className="py-2 px-1.5 whitespace-nowrap">
                  <div className="flex items-center">
                    <CalendarMonth fontSize="small" className="text-gray-400" />
                    {emp.scheduleOut}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className="block md:hidden space-y-4 max-h-[65vh] overflow-y-auto px-1">
        {attendanceData.map((emp, idx) => (
          <div
            key={idx}
            className="border rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-200 ease-in-out"
          >
            <div className="flex justify-between items-center">
              <div>
                <div className="font-semibold text-gray-800">{emp.name}</div>
                <div className="text-gray-500 text-sm">{emp.role}</div>
              </div>
              <span
                className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                  emp.status === "Full-time"
                    ? "bg-green-100 text-green-600"
                    : "bg-yellow-100 text-yellow-600"
                }`}
              >
                {emp.status}
              </span>
            </div>

            <div className="mt-3 space-y-2 text-sm">
              <div className="flex items-center gap-1">
                <AccessTime fontSize="small" className="text-gray-400" />
                <span className="font-medium">In:</span> {emp.checkIn}
              </div>
              <div className="flex items-center gap-1">
                <AccessTime fontSize="small" className="text-gray-400" />
                <span className="font-medium">Out:</span> {emp.checkOut}
              </div>
              <div className="flex items-center gap-1">
                <CalendarMonth fontSize="small" className="text-gray-400" />
                <span className="font-medium">Sched In:</span> {emp.scheduleIn}
              </div>
              <div className="flex items-center gap-1">
                <CalendarMonth fontSize="small" className="text-gray-400" />
                <span className="font-medium">Sched Out:</span>{" "}
                {emp.scheduleOut}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AttendanceTable;
