import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const TrailBanner = () => {
  return (
    <section className="w-full px-3 md:px-16 py-20 bg-[#F5F5F5] rounded-md">
      <div className="mb-5 flex items-center justify-center">
        <Button
          variant="outlined"
          sx={{
            borderColor: "#111827",
            py: 1,
            px: 2,
            fontSize: "13px",
            color: "#1D2A45",
            fontWeight: "bold",
            borderRadius: "30px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          <img
            src="/images/heroBtnIcon.png"
            alt="Icon"
            className="inline-block mr-2"
          />
          What Talkeen Does for You
        </Button>
      </div>

      <div className="flex flex-col items-start justify-start w-full mx-auto my-14 md:my-28">
        <p className="font-bold text-2xl md:text-5xl text-[#111827] tracking-tight md:max-w-4xl">
          Automate conversations, boost sales, and simplify customer engagement
          — all with AI agents that understand, talk, and act like real humans.
        </p>
        <p className="font-bold text-2xl md:text-5xl text-[#9D9D9D] tracking-tight md:max-w-4xl mt-6 md:mt-10">
          No delays. No missed leads. Just smart, efficient automation working
          24/7 for your business.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        <ul className="list-disc pl-4">
          <li className="mb-2 text-lg font-semibold text-[#3c3f46]">
            Advance Features
          </li>
        </ul>
        <div className="boxContent flex flex-col items-start gap-10 md:gap-0 w-full">
          <div className="p-2 md:p-5 flex gap-4 md:gap-6 justify-between">
            <div className="boxIcon1 h-10 w-10 md:h-14 md:w-14 p-7 bg-[#FCFCFC] rounded-full flex items-center justify-center">
              <EmojiEventsIcon className="text-[#4054D0]" fontSize="large" />
            </div>
            <div className="box1">
              <h3 className="text-sm md:text-lg font-semibold mb-2 text-left">
                Human-like agents, smarter than eve
              </h3>
              <p className="text-[#64607D] text-xs md:text-sm text-left mb-2">
                {/* You can handle actual text here */}
                They talk. They book. They solve. All without you lifting a
                finger.
              </p>
              <Link to="#" className="text-[#01966B] font-medium text-14px">
                Read More <ArrowRightAltIcon />
              </Link>
            </div>
          </div>

          <div className="p-2 md:p-5 flex gap-4 md:gap-6 justify-between">
            <div className="boxIcon2 h-10 w-10 md:h-14 md:w-14 p-7 bg-[#FCFCFC] rounded-full flex items-center justify-center">
              <LocalFloristIcon className="text-[#4054D0]" fontSize="large" />
            </div>
            <div className="box2">
              <h3 className="text-sm md:text-lg font-semibold mb-2 text-left">
                Connect once, automate forever
              </h3>
              <p className="text-[#64607D] text-xs md:text-sm text-left mb-2">
              From WhatsApp to CRM — Talkeen keeps your entire business in
              sync and running on autopilot.
              </p>
              <Link to="#" className="text-[#01966B] font-medium text-14px">
                Read More <ArrowRightAltIcon />
              </Link>
            </div>
          </div>

          <div className="p-2 md:p-5 flex gap-4 md:gap-6 justify-between">
            <div className="boxIcon3 h-10 w-10 md:h-14 md:w-14 p-7 bg-[#FCFCFC] rounded-full flex items-center justify-center">
              <Brightness7Icon className="text-[#4054D0]" fontSize="large" />
            </div>
            <div className="box3">
              <h3 className="text-sm md:text-lg font-semibold mb-2 text-left">
                More time, more revenue
              </h3>
              <p className="text-[#64607D] text-xs md:text-sm text-left mb-2">
                While Talkeen handles clients, you focus on scaling.
              </p>
              <Link to="#" className="text-[#01966B] font-medium text-14px">
                Read More <ArrowRightAltIcon />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center">
        <img
          src="/images/TrailBanner.png"
          alt="Predictive AI Analytics"
          className="hidden md:block rounded-2xl w-full max-w-5xl object-cover shadow-md"
        />
        <img
          src="/images/TrailBanner2.png"
          alt="Predictive AI Analytics"
          className="block md:hidden rounded-2xl w-full max-w-5xl object-cover shadow-md"
        />
      </div>
    </section>
  );
};

export default TrailBanner;
