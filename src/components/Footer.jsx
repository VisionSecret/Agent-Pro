import React, { useState } from "react";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Button, TextField, Snackbar, Alert } from "@mui/material";
import { Send } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [open, setOpen] = useState(false);

  const handleSubscribe = () => {
    if (email.trim()) {
      setOpen(true);
      setEmail("");
    }
  };

  return (
    <footer className="w-full max-w-[1440px] mx-auto px-8 py-2 sm:px-20 sm:py-6 font-sans relative">
      {/* Logo */}
      <div className="flex mb-8">
        <Link to="/" className="flex items-center">
          <img
            src="/images/talkeenLogo.jpeg"
            alt="Talkeen Logo"
            className="h-12 w-36 object-contain"
          />
        </Link>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-8 pb-8 border-b border-gray-200">
        {/* Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 flex-1">
          {/* About Column */}
          <div className="space-y-3">
            <h4 className="font-medium text-gray-800">About</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-[#9D9D9D] text-sm hover:text-[#111827] transition-colors"
                >
                  Company
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="text-[#9D9D9D] text-sm hover:text-[#111827] transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/press"
                  className="text-[#9D9D9D] text-sm hover:text-[#111827] transition-colors"
                >
                  Press
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div className="space-y-3">
            <h4 className="font-medium text-gray-800">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/blog"
                  className="text-[#9D9D9D] text-sm hover:text-[#111827] transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/help-center"
                  className="text-[#9D9D9D] text-sm hover:text-[#111827] transition-colors"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  to="/case-studies"
                  className="text-[#9D9D9D] text-sm hover:text-[#111827] transition-colors"
                >
                  Case Studies
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Column */}
          <div className="space-y-3">
            <h4 className="font-medium text-gray-800">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/contact"
                  className="text-[#9D9D9D] text-sm hover:text-[#111827] transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/support"
                  className="text-[#9D9D9D] text-sm hover:text-[#111827] transition-colors"
                >
                  Support
                </Link>
              </li>
              <li>
                <Link
                  to="/feedback"
                  className="text-[#9D9D9D] text-sm hover:text-[#111827] transition-colors"
                >
                  Feedback
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect Column */}
          <div className="space-y-3">
            <h4 className="font-medium text-gray-800">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener"
                  className="flex items-center text-[#9D9D9D] text-sm hover:text-[#111827] transition-colors"
                >
                  <FacebookRoundedIcon className="mr-2 text-base" /> Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener"
                  className="flex items-center text-[#9D9D9D] text-sm hover:text-[#111827] transition-colors"
                >
                  <InstagramIcon className="mr-2 text-base" /> Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener"
                  className="flex items-center text-[#9D9D9D] text-sm hover:text-[#111827] transition-colors"
                >
                  <XIcon className="mr-2 text-base" /> Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener"
                  className="flex items-center text-[#9D9D9D] text-sm hover:text-[#111827] transition-colors"
                >
                  <LinkedInIcon className="mr-2 text-base" /> LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter - Desktop */}
        <div className="hidden lg:block w-80">
          <div className="bg-gradient-to-r bg-white p-6 rounded-2xl shadow-xl border border-[111827]">
            <h4 className="font-semibold text-gray-900 mb-4 text-center">
              Stay in the Loop
            </h4>
            <div className="flex gap-x-1">
              <TextField
                variant="outlined"
                size="small"
                placeholder="Enter your email"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white rounded-lg"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "4px",
                    fontSize: "0.875rem",
                  },
                }}
              />
              <Button
                onClick={handleSubscribe}
                variant="outlined"
                sx={{
                  backgroundColor: "#111827",
                  color: "#ffffff",
                  py: 1,
                  px: 2,
                  fontSize: "13px",
                  fontWeight: "bold",
                  borderRadius: "4px",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Send fontSize="small" />
              </Button>
            </div>
            <p className="text-xs text-[#9D9D9D] mt-2 text-center">
              No spam, unsubscribe anytime
            </p>
          </div>
        </div>
      </div>

      {/* Newsletter - Mobile */}
      <div className="pt-8 lg:hidden">
        <div className="bg-white p-5 rounded-xl shadow-xl border border-zinc-200">
          <h4 className="font-semibold text-gray-900 mb-3 text-center">
            Join Our Newsletter
          </h4>
          <div className="flex flex-col sm:flex-row gap-2">
            <TextField
              variant="outlined"
              size="small"
              placeholder="Email address"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white rounded-md"
            />
            <Button
                onClick={handleSubscribe}
                variant="contained"
                sx={{
                  backgroundColor: "#111827",
                  color: "#ffffff",
                  py: 1,
                  px: 2,
                  fontSize: "13px",
                  fontWeight: "bold",
                  borderRadius: "4px",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Send fontSize="small" />
              </Button>
          </div>
          <p className="text-xs text-[#9D9D9D] mt-2 text-center">
            Unsubscribe anytime
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 py-4 md:py-0 md:pt-10">
        <p className="text-[#111827] text-sm order-2 md:order-1">
          ©2025 Talkeen. All rights reserved.
        </p>

        <div className="flex gap-4 order-1 md:order-2">
          <Link
            to="/terms"
            className="text-[#9D9D9D] text-sm hover:text-[#111827] transition-colors"
          >
            Terms
          </Link>
          <Link
            to="/privacy"
            className="text-[#9D9D9D] text-sm hover:text-[#111827] transition-colors"
          >
            Privacy
          </Link>
          <Link
            to="/security"
            className="text-[#9D9D9D] text-sm hover:text-[#111827] transition-colors"
          >
            Security
          </Link>
        </div>
      </div>

      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={() => setOpen(false)}
      >
        <Alert severity="success" sx={{ width: "100%" }}>
          Thanks for subscribing! Stay tuned for updates.
        </Alert>
      </Snackbar>
    </footer>
  );
};

export default Footer;
