import { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  Button,
  Checkbox,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
  Divider,
  FormControlLabel,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import LandingLayout from "../layouts/LandingLayout";

export default function Login() {
  const [checked, setChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const isMobile = useMediaQuery("(max-width:768px)");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <LandingLayout>
      <div className="min-h-[70vh] w-full text-[#111827] bg-[#FCFBFB] p-1.5 md:py-8 flex items-center justify-center">
        <div className="w-full max-w-6xl h-full flex flex-col md:flex-row md:px-8 rounded-xl shadow-lg overflow-hidden">
          {/* Image Container - Hidden on mobile */}
          <div className="hidden h-full md:flex md:w-[45%] p-4 md:p-3 items-center justify-center">
            <img
              className="h-2/3 w-2/3 object-cover"
              src="/images/loginImg.png"
              alt="Signup Illustration"
            />
          </div>

          {/* Form Container */}
          <div className="w-full md:w-[50%] py-3 md:p-6 flex flex-col justify-center">
            <Typography
              variant="h5"
              fontWeight={700}
              className="!text-3xl md:!text-4xl !mb-3"
            >
              Welcome Back!
            </Typography>

            <div className="socials flex gap-4 my-4">
              <Button
                variant="outlined"
                fullWidth
                startIcon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                  </svg>
                }
                sx={{
                  textTransform: "none",
                  color: "#222827",
                  borderColor: "#CCCCCC",
                }}
              >
                Google
              </Button>
              <Button
                variant="outlined"
                fullWidth
                startIcon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="#1877F2"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                }
                sx={{
                  textTransform: "none",
                  color: "#222827",
                  borderColor: "#CCCCCC",
                }}
              >
                Facebook
              </Button>
            </div>

            <Divider sx={{ mb: 2 }}>
              <Typography variant="body2" color="text.secondary">
                Login with Email
              </Typography>
            </Divider>

            <form className="space-y-4 md:space-y-3">
              <TextField
                fullWidth
                size="medium"
                label="Email"
                type="email"
                variant="outlined"
              />

              <div className="flex items-center justify-end">
                <Link to="/forgot-password" className="text-xs md:text-sm font-semibold underline text-[#1976D2]">
                  Forgot Password?
                </Link>
              </div>

              <TextField
                fullWidth
                size="medium"
                label="Password"
                type={showPassword ? "text" : "password"}
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        size="small"
                        onClick={togglePasswordVisibility}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              <FormControlLabel
                sx={{ m: 0 }}
                control={
                  <Checkbox
                    size="small"
                    checked={checked}
                    onChange={(e) => setChecked(e.target.checked)}
                    color="primary"
                    sx={{
                      "&.Mui-checked": { color: "black" },
                      py: 0.5,
                    }}
                  />
                }
                label={
                  <Typography
                    variant="body2"
                    sx={{ fontSize: "12px", color: "#333827" }}
                  >
                    I agreed to the{" "}
                    <Link
                      to="#"
                      style={{
                        fontSize: "12px",
                        color: "#111827",
                        textDecoration: "underline",
                        fontWeight: "700",
                        textTransform: "none",
                      }}
                    >
                      Terms & Conditions
                    </Link>
                  </Typography>
                }
              />

              <Button
                fullWidth
                variant="contained"
                size="medium"
                disabled={!checked}
                sx={{
                  py: 1,
                  backgroundColor: "#111827",
                  fontWeight: "bold",
                  textTransform: "capitalize",
                  fontSize: "16px",
                }}
              >
                Login
              </Button>
            </form>

            <div className="flex items-center justify-center mt-3">
              <p className="font-medium text-sm">Not had a account?</p>
              <Link to="/signup">
                <Button
                  size="small"
                  sx={{
                    color: "#111827",
                    textTransform: "capitalize",
                    fontWeight: "700",
                    textDecoration: "underline",
                    fontSize: "15px"
                  }}
                >
                  Sign Up
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </LandingLayout>
  );
}
