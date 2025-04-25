import React from "react";
import { Button, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import LandingLayout from "../layouts/LandingLayout";

const ForgotPassword = () => {
  return (
    <LandingLayout>
      <div className="min-h-[70vh] w-full text-[#111827] bg-[#FCFBFB] p-1.5 md:py-8 flex items-center justify-center">
        <div className="w-full max-w-6xl h-full flex flex-col md:flex-row md:px-8 rounded-xl shadow-lg overflow-hidden">
          {/* Image Container - Hidden on mobile */}
          <div className="hidden h-full md:flex md:w-[55%] p-4 md:p-3 items-center justify-center">
            <img
              className="h-2/3 w-2/3 object-cover"
              src="/images/loginImg.png"
              alt="Signup Illustration"
            />
          </div>

          {/* Form Container */}
          <div className="w-full md:w-[45%] py-3 md:p-6 flex flex-col justify-center">
            <Typography
              variant="h5"
              fontWeight={700}
              className="!text-3xl md:!text-4xl !mb-28"
            >
              Forgot Password!
            </Typography>

            <form className="space-y-4 md:space-y-3">
              <TextField
                fullWidth
                size="medium"
                label="Email"
                type="email"
                variant="outlined"
              />

              <Button
                fullWidth
                variant="contained"
                size="medium"
                sx={{
                  py: 1,
                  backgroundColor: "#111827",
                  fontWeight: "bold",
                  textTransform: "capitalize",
                  fontSize: "16px",
                }}
              >
                Submit
              </Button>
            </form>

            <div className="flex items-center justify-center mt-3">
              <p className="font-medium text-sm">Already had a account?</p>
              <Link to="/login">
                <Button
                  size="small"
                  sx={{
                    color: "#111827",
                    textTransform: "capitalize",
                    fontWeight: "700",
                    textDecoration: "underline",
                    fontSize: "15px",
                  }}
                >
                  Sign in
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </LandingLayout>
  );
};

export default ForgotPassword;
