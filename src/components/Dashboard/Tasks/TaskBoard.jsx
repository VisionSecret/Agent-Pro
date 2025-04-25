import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { IconButton } from "@mui/material";

const taskData = {
  "To-do": [
    { title: "Design login page", label: "Staging", color: "red" },
    { title: "Create wireframes", label: "UI", color: "yellow" },
    { title: "Write test cases", label: "QA", color: "blue" },
    { title: "Fix navbar bug", label: "Frontend", color: "green" },
  ],
  Progress: [
    { title: "Connect to API", label: "Backend", color: "indigo" },
    { title: "Auth flow", label: "Security", color: "red" },
    { title: "API development", label: "Development", color: "orange" },
  ],
  Review: [
    { title: "Dashboard layout", label: "UX", color: "purple" },
    { title: "Database schema", label: "Architecture", color: "gray" },
    { title: "MongoDB Issue", label: "Architecture", color: "yellow" },
    { title: "Frontend development", label: "Development", color: "brown" },
  ],
  Complete: [
    { title: "Project setup", label: "Init", color: "green" },
    { title: "Basic routing", label: "React", color: "blue" },
    { title: "Sidebar component", label: "UI", color: "yellow" },
  ],
};

const sectionColors = {
  "To-do": "text-blue-500",
  Progress: "text-red-500",
  Review: "text-green-500",
  Complete: "text-yellow-500",
};

const TaskCard = ({ title, label, color }) => (
  <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition-all duration-300 mb-3 border border-gray-100">
    <h4 className="text-sm font-semibold mb-2">{title}</h4>
    <span
      className={`text-xs font-medium px-2 py-1 rounded-full bg-${color}-100 text-${color}-700`}
    >
      {label}
    </span>
  </div>
);

const TaskBoard = () => {
  return (
    <div className="overflow-x-auto">
      <div className="flex gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-4 snap-x snap-mandatory min-w-[1000px] sm:min-w-full">
        {Object.entries(taskData).map(([section, tasks]) => (
          <div
            key={section}
            className="bg-gray-50 rounded-lg p-2 min-w-[280px] snap-start flex-shrink-0 sm:flex-shrink sm:min-w-0"
          >
            <div className="flex justify-between items-center bg-white p-2 rounded-md shadow mb-3">
              <h3 className="text-base font-semibold">
                {section}{" "}
                <span className={`text-sm ${sectionColors[section]}`}>
                  ({tasks.length})
                </span>
              </h3>
              <IconButton size="small" aria-label={`Add task to ${section}`}>
                <AddIcon fontSize="small" />
              </IconButton>
            </div>

            {tasks.map((task, idx) => (
              <TaskCard key={idx} {...task} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskBoard;
