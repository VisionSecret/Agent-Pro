import { useState, useRef, useEffect } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { IconButton, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownTimers = useRef({});
  let navigate = useNavigate();

  const handleMouseEnter = (name) => {
    clearTimeout(dropdownTimers.current[name]);
    setOpenDropdown(name);
  };
  const handleMouseLeave = (name) => {
    dropdownTimers.current[name] = setTimeout(() => setOpenDropdown(null), 200);
  };

  useEffect(() => {
    const timers = dropdownTimers.current; // Save current ref in a local variable
    return () => Object.values(timers).forEach(clearTimeout);
  }, []);
  

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm w-full">
      {/* Desktop */}
      <div className="hidden md:flex container mx-auto items-center justify-between h-20 px-6">
        <div>
          <NavLink to="/">
            <img
              src="/images/talkeenLogo.jpeg"
              alt="Logo"
              className="h-10 w-auto"
            />
          </NavLink>
        </div>

        <ul className="flex items-center space-x-8">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${
                  isActive ? "text-black" : "text-gray-600"
                } hover:text-black font-medium`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/user-dashboard"
              className={({ isActive }) =>
                `${
                  isActive ? "text-black" : "text-gray-600"
                } hover:text-black font-medium`
              }
            >
              About Us
            </NavLink>
          </li>
          <li>
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("caseStudies")}
              onMouseLeave={() => handleMouseLeave("caseStudies")}
            >
              <button className="flex items-center text-gray-600 hover:text-black font-medium">
                Case Studies <KeyboardArrowDownIcon fontSize="small" />
              </button>
              <ul
                className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white border border-gray-200 rounded shadow-lg w-40 ${
                  openDropdown === "caseStudies" ? "block" : "hidden"
                }`}
              >
                {["retail", "finance", "healthcare"].map((item) => (
                  <li key={item}>
                    <NavLink
                      to={`/case-studies/${item}`}
                      className={({ isActive }) =>
                        `block px-4 py-2 ${
                          isActive ? "text-black" : "text-gray-600"
                        } hover:bg-gray-50`
                      }
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `${
                  isActive ? "text-black" : "text-gray-600"
                } hover:text-black font-medium`
              }
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/pricing"
              className={({ isActive }) =>
                `${
                  isActive ? "text-black" : "text-gray-600"
                } hover:text-black font-medium`
              }
            >
              Pricing
            </NavLink>
          </li>
        </ul>

        <div className="flex items-center justify-center gap-x-2">
          <Button
            variant="outlined"
            onClick={() => navigate("/signup")}
            sx={{
              borderColor: "#111827",
              padding: "8px 22px",
              borderRadius: "6px",
              fontSize: "15px",
              color: "#111827",
              fontWeight: 600,
              textTransform: "capitalize",
              "&:hover": {
                borderColor: "#111827",
              },
            }}
          >
            Sign Up
          </Button>
          <Button
            variant="contained"
            onClick={() => navigate("/login")}
            sx={{
              backgroundColor: "#111827",
              padding: "8px 22px",
              borderRadius: "6px",
              fontSize: "15px",
              fontWeight: 600,
              textTransform: "capitalize",
              "&:hover": {
                backgroundColor: "#111827",
              },
            }}
          >
            Login
          </Button>
        </div>
      </div>

      {/* Mobile Toggle */}
      <div className="md:hidden flex items-center justify-between px-4 h-20 w-full">
        <NavLink to="/">
          <img
            src="/images/talkeenLogo.jpeg"
            alt="Logo"
            className="h-10 w-auto"
          />
        </NavLink>
        <IconButton onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-y-0 left-0 w-3/4 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="flex flex-col space-y-4 mt-8 px-6">
          <li>
            <NavLink
              to="/"
              onClick={() => setMobileOpen(false)}
              className="text-gray-700 text-lg font-medium"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/user-dashboard"
              onClick={() => setMobileOpen(false)}
              className="text-gray-700 text-lg font-medium"
            >
              About Us
            </NavLink>
          </li>
          <li>
            <button
              onClick={() =>
                setOpenDropdown(
                  openDropdown === "mobileCase" ? null : "mobileCase"
                )
              }
              className="flex items-center justify-between w-full text-gray-700 text-lg font-medium"
            >
              Case Studies <KeyboardArrowDownIcon />
            </button>
            {openDropdown === "mobileCase" && (
              <ul className="mt-2 ml-4 space-y-2">
                {["retail", "finance", "healthcare"].map((item) => (
                  <li key={item}>
                    <NavLink
                      to={`/case-studies/${item}`}
                      onClick={() => setMobileOpen(false)}
                      className="text-gray-600 hover:text-black"
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li>
            <NavLink
              to="/blog"
              onClick={() => setMobileOpen(false)}
              className="text-gray-700 text-lg font-medium"
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/pricing"
              onClick={() => setMobileOpen(false)}
              className="text-gray-700 text-lg font-medium"
            >
              Pricing
            </NavLink>
          </li>
          <li>
            <Button
              variant="contained"
              fullWidth
              onClick={() => navigate("/signup")}
              sx={{
                backgroundColor: "#111827",
                borderRadius: "6px",
                textTransform: "none",
                py: 1,
                mt: 10,
              }}
            >
              Sign Up
            </Button>
          </li>
          <li>
            <Button
              variant="outlined"
              onClick={() => navigate("/login")}
              fullWidth
              sx={{
                borderColor: "#222827",
                color: "#111827",
                outline: "none",
                borderRadius: "6px",
                textTransform: "none",
                py: 1,
              }}
            >
              Login
            </Button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
