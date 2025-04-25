import React from "react";
import { Button } from "@mui/material";

const ValueSection = () => {
  return (
    <section className="w-full md:px-16 py-8 md:py-16 bg-white">
      <div className="flex items-center justify-center mb-10">
        <div className="hidden md:block">
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
            How it works
          </Button>
        </div>
        <div className="md:hidden block">
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
            Our Strategies
          </Button>
        </div>
      </div>

      <div className="hidden md:block text-center max-w-xl mx-auto mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          How Talkeen Transforms Your{" "}
          <span className="text-[#9D9D9D]">Customer </span> Experience
        </h2>
        <p className="text-gray-400 font-semibold text-sm">
          Automate, Humanize & Grow Your Business 24/7
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-6">
          <Button
            variant="contained"
            sx={{
              bgcolor: "#111827",
              color: "#FFFFFF",
              py: 1.5,
              px: 3,
              fontSize: "16px",
              fontWeight: "bold",
              textTransform: "capitalize",
              "&:hover": { bgcolor: "#111827" },
              borderRadius: "12px",
            }}
          >
            Meet Your New Sales Assistant
          </Button>

          <Button
            variant="outlined"
            sx={{
              borderColor: "#111827",
              color: "#4B5162",
              py: 1.5,
              px: 3,
              textTransform: "capitalize",
              fontSize: "16px",
              fontWeight: "bold",
              "&:hover": { borderColor: "#111827" },
              borderRadius: "12px",
            }}
          >
            Explore Real Use Cases
          </Button>
        </div>
      </div>

      {/* Mobile Side Text Content */}
      <div className="block md:hidden text-center max-w-3xl mx-auto mb-10 px-3">
        <h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-3">
          How Talkeen Works in 3 Simple Steps
        </h2>
        <p className="text-gray-400 text-base tracking-tight">
          Automate Customer Engagement & Boost Business Growth
        </p>
        <div className="flex justify-center items-center gap-4 mt-9">
          <Button
            variant="contained"
            sx={{
              bgcolor: "#111827",
              color: "#FFFFFF",
              py: 1,
              px: 2.5,
              fontSize: "16px",
              fontWeight: "600",
              textTransform: "capitalize",
              "&:hover": { bgcolor: "#111827" },
              borderRadius: "10px",
            }}
          >
            Get a demo
          </Button>

          <Button
            variant="outlined"
            sx={{
              borderColor: "#111827",
              color: "#4B5162",
              py: 1,
              px: 2.5,
              textTransform: "capitalize",
              fontSize: "16px",
              fontWeight: "700",
              "&:hover": { borderColor: "#111827" },
              borderRadius: "10px",
            }}
          >
            Research
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-6 mb-20 mt-28">
        <div className="md:border-[1px] border-[#1D2A45] rounded-xl p-6">
          <div className="flex items-start md:items-center gap-x-2 mb-2 md:mb-0">
            <img
              src="/images/iconWrapper.png"
              alt="People Alt Outlined Icon"
              className="w-6 h-6 object-fit object-center"
            />
            <h3 className="text-lg font-semibold">Connect & Integrate</h3>
          </div>
          <p className="text-gray-400 font-medium md:font-normal md:text-gray-500 text-sm">
            Easily connect WhatsApp, Instagram, WebChat, and CRM to unify every
            customer conversation in one smart dashboard — no more scattered
            chats or manual follow-ups.
          </p>
        </div>

        <div className="p-6">
          <div className="flex items-center gap-x-2 mb-2 md:mb-0">
            <img
              src="/images/iconWrapper2.png"
              alt="People Alt Outlined Icon"
              className="w-6 h-6 object-fit object-center"
            />
            <h3 className="text-lg font-semibold">Automate with Human Touch</h3>
          </div>
          <p className="text-gray-400 font-medium md:font-normal md:text-gray-500 text-sm">
            Deploy AI agents that speak like humans, handle questions, close
            sales, and confirm bookings — instantly, 24/7, and without mistakes.
          </p>
        </div>

        <div className="p-6">
          <div className="flex items-center gap-x-2 mb-2 md:mb-0">
            <img
              src="/images/iconWrapper3.png"
              alt="People Alt Outlined Icon"
              className="w-6 h-6 object-fit object-center"
            />
            <h3 className="text-lg font-semibold">Track, Learn & Optimize</h3>
          </div>
          <p className="text-gray-400 font-medium md:font-normal md:text-gray-500 text-sm">
            Use AI-powered insights to monitor behavior, detect opportunities,
            and automatically trigger messages, calls, or campaigns that keep
            your business growing.
          </p>
        </div>
      </div>

      <div className="w-full flex justify-center">
        <img
          src="/images/ValueSection.png"
          alt="Predictive AI Analytics"
          className="hidden md:block rounded-2xl w-full max-w-5xl object-cover shadow-md"
        />
        <img
          src="/images/HomeContainer.png"
          alt="Predictive AI Analytics"
          className="block md:hidden rounded-2xl w-full max-w-5xl object-cover shadow-md"
        />
      </div>
    </section>
  );
};

export default ValueSection;
