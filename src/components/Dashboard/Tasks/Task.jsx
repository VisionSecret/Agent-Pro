import React from "react";
import { MoreHoriz } from "@mui/icons-material";
import { Button, TextField } from "@mui/material";
import AssignmentIcon from "@mui/icons-material/Assignment";
import CreateTask from "./CreateTask";
import ViewListIcon from "@mui/icons-material/ViewList";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import TimelineIcon from "@mui/icons-material/Timeline";
import TuneIcon from "@mui/icons-material/Tune";
import TaskBoard from "./TaskBoard";

const Task = () => {
  return (
    <div className="w-full min-h-screen sm:p-6 bg-[#f9fafb]">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 gap-2 sm:gap-0">
        <h1 className="text-[#111827] text-xl sm:text-2xl font-bold">
          Task
        </h1>
        <div className="flex items-center gap-3 text-gray-600">
          <AssignmentIcon className="cursor-pointer" />
          <MoreHoriz className="cursor-pointer" />
        </div>
      </div>

      {/* Create Task Summary Card */}
      <CreateTask />

      {/* Action Buttons + Search Row */}
      <div className="mt-6 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        {/* Left: 4 Buttons */}
        <div className="flex flex-wrap gap-3">
          <Button
            variant="outlined"
            startIcon={<ViewModuleIcon />}
            sx={{
              borderColor: "#222827",
              color: "#111827",
              textTransform: "none",
              fontWeight: "600",
              "&:hover": { borderColor: "#1f2937" },
            }}
          >
            Board
          </Button>
          <Button
            variant="outlined"
            startIcon={<ViewListIcon />}
            sx={{
              borderColor: "#E5E7EB",
              color: "#111827",
              textTransform: "none",
              fontWeight: "600",
              "&:hover": { borderColor: "#1f2937" },
            }}
          >
            List
          </Button>
          <Button
            variant="outlined"
            startIcon={<CalendarMonthIcon />}
            sx={{
              borderColor: "#E5E7EB",
              color: "#111827",
              textTransform: "none",
              fontWeight: "600",
              "&:hover": { borderColor: "#1f2937" },
            }}
          >
            Calendar
          </Button>
          <Button
            variant="outlined"
            startIcon={<TimelineIcon />}
            sx={{
              borderColor: "#E5E7EB",
              color: "#111827",
              textTransform: "none",
              fontWeight: "600",
              "&:hover": { borderColor: "#1f2937" },
            }}
          >
            Timeline
          </Button>
        </div>

        {/* Right: Search + Filter */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <TextField
            label="Search task"
            variant="outlined"
            size="small"
            sx={{
              backgroundColor: "white",
              minWidth: { xs: "100%", sm: 200 },
            }}
          />
          <Button
            startIcon={<TuneIcon />}
            variant="contained"
            sx={{
              backgroundColor: "#111827",
              color: "white",
              textTransform: "none",
              fontWeight: "600",
              "&:hover": { backgroundColor: "#1f2937" },
            }}
          >
            Filter
          </Button>
        </div>
      </div>

      {/* Task Board */}
      <div className="mt-8">
        <TaskBoard />
      </div>
    </div>
  );
};

export default Task;
