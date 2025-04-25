import { Button, IconButton } from "@mui/material";
import CalendarMonth from "@mui/icons-material/CalendarMonth";
import Upload from "@mui/icons-material/Upload";
import ViewSidebar from "@mui/icons-material/ViewSidebar";
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';


const Header = ({ onMenuClick }) => (
  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-0 mb-3 md:mb-6 pt-5 md:pt-0">
    {/* Left: Title & Mobile Menu */}
    <div className="flex items-start md:justify-center gap-1 w-full md:w-auto">
      {/* Sidebar menu button */}
      <IconButton
        onClick={onMenuClick}
        className="bg-gray-500 text-white p-2"
        aria-label="open sidebar"
      >
        <DashboardCustomizeIcon style={{ color: 'black', fontSize: "30px" }} />
      </IconButton>
      <div className="mt-2 md:mt-1">
        <h2 className="text-2xl md:text-2xl text-[#111827] font-bold">
          Dashboard
        </h2>
        <p className="text-gray-400 text-sm font-medium">
          Explore your needs here
        </p>
      </div>
    </div>

    {/* Right: Buttons */}
    <div className="flex flex-col md:flex-row gap-2 w-full md:w-auto">
      <Button
        variant="outlined"
        startIcon={<CalendarMonth />}
        fullWidth
        className="md:w-auto"
      >
        January
      </Button>
      <Button
        variant="contained"
        startIcon={<Upload />}
        fullWidth
        className="md:w-auto"
      >
        Export
      </Button>
    </div>
  </div>
);

export default Header;
