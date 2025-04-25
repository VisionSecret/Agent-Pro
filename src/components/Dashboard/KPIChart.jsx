import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { MoreHoriz } from "@mui/icons-material";

const data = [
  { name: "Jan", kpi: 72 },
  { name: "Feb", kpi: 75 },
  { name: "Mar", kpi: 78 },
  { name: "Apr", kpi: 65 },
  { name: "May", kpi: 82 },
  { name: "Jun", kpi: 85 },
  { name: "Jul", kpi: 80 },
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-gray-200 px-3 py-1.5 rounded-lg shadow-sm text-sm font-medium text-gray-700">
        {`${payload[0].payload.name}: ${payload[0].value}%`}
      </div>
    );
  }
  return null;
};

const KPIChart = () => {
  const latest = data[data.length - 1].kpi;

  return (
    <div className="bg-white rounded-2xl shadow-sm p-3 w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl md:text-2xl font-bold text-[#111827]">Team KPI Overview</h2>
        <span className="bg-indigo-100 text-indigo-600 text-xs font-semibold px-2.5 py-1 rounded-full">
          {latest}%
        </span>
      </div>

      <div className="text-[32px] font-bold text-gray-900 mb-2 leading-none">
        82.10%
      </div>
      <p className="text-sm text-gray-500 mb-4">Average performance this year</p>

      <ResponsiveContainer width="100%" height={170}>
        <LineChart data={data}>
          <defs>
            <linearGradient id="kpiGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#6366f1" stopOpacity={1} />
              <stop offset="100%" stopColor="#6366f1" stopOpacity={0.2} />
            </linearGradient>
            <linearGradient id="bgGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#007bff" stopOpacity={0.2} />
              <stop offset="100%" stopColor="#007bff" stopOpacity={0.2} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="4 4" stroke="#f1f5f9" />
          <XAxis dataKey="name" tick={{ fontSize: 12 }} stroke="#cbd5e1" />
          <YAxis domain={[60, 100]} tick={{ fontSize: 12 }} stroke="#cbd5e1" />
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="monotone"
            dataKey="kpi"
            stroke="url(#kpiGradient)"
            strokeWidth={3}
            dot={{
              r: 5,
              stroke: "#6366f1",
              strokeWidth: 2,
              fill: "white",
            }}
            activeDot={{
              r: 7,
              fill: "#6366f1",
              stroke: "white",
              strokeWidth: 2,
            }}
          />
          <Line
            type="monotone"
            dataKey="kpi"
            stroke="url(#bgGradient)"
            strokeWidth={3}
            dot={false}
            activeDot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default KPIChart;
