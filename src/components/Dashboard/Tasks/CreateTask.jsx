import { Button, Avatar, AvatarGroup } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";

const CreateTask = () => {
  return (
    <div className="w-full flex flex-wrap items-center justify-between gap-3 border border-gray-200 p-4 bg-white shadow-sm">
      {/* Left Section */}
      <div>
        <h2 className="text-xl font-bold text-gray-900">February</h2>
        <p className="text-sm text-gray-500">Today is Saturday, Feb 28th, 2025</p>
      </div>

      {/* Middle Section */}
      <div className="flex items-center gap-4">
        <h2 className="text-md font-semibold text-gray-800">Board - Daily Task</h2>
        {/* Dummy Profile Icons */}
        <AvatarGroup max={3}>
          <Avatar alt="Remy Sharp" src="https://i.pravatar.cc/150?img=3" />
          <Avatar alt="Travis Howard" src="https://i.pravatar.cc/150?img=4" />
          <Avatar alt="Cindy Baker" src="https://i.pravatar.cc/150?img=5" />
        </AvatarGroup>
      </div>

      {/* Right Section */}
      <div>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          sx={{
            backgroundColor: "#1d4ed8", // Tailwind blue-700
            color: "white",
            textTransform: "none",
            fontWeight: "600",
            "&:hover": {
              backgroundColor: "#1e40af", // Tailwind blue-800
            },
          }}
        >
          Create Task
        </Button>
      </div>
    </div>
  );
};

export default CreateTask;
