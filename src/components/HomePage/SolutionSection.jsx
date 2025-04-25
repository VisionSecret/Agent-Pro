import React from "react";
import { Button } from "@mui/material";

const features = [
  {
    title: "Connect Communication Channels",
    icon: (
      <img
        src="/images/iconWrapper2.png"
        alt="Icon 1"
        className="w-6 h-6 object-fit"
      />
    ),
    desc: "Easily link WhatsApp, Instagram, Messenger, WebChat, and CRM in one unified inbox.",
    tag: "Finance, Retail, E-commerce",
  },
  {
    title: "Choose a Pre-trained AI Agent (by Industry)",
    icon: (
      <img
        src="/images/solutionSectionIcon1.png"
        alt="Icon 2"
        className="w-8 h-8 object-fit"
      />
    ),
    desc: "Select from a library of agents trained for your sector: Real Estate, Fitness, Clinics, Education, etc.",
    tag: "Tech, Healthcare, Manufacturing",
  },
  {
    title: "Customize It With Your Business Info",
    icon: (
      <img
        src="/images/solutionSectionIcon2.png"
        alt="Icon 3"
        className="w-8 h-8 object-fit"
      />
    ),
    desc: "Edit name, services, pricing, tone, FAQs and more so your agent truly represents your brand.",
    tag: "Marketing, Sales, Operations",
  },
  {
    title: "Train the Agent (Optional)",
    icon: (
      <img
        src="/images/solutionSectionIcon3.png"
        alt="Icon 4"
        className="w-8 h-8 object-fit"
      />
    ),
    desc: "Add keywords, documents, instructions or examples if you want full control — no coding needed.",
    tag: "E-commerce, Logistics, Supply Chain",
  },
  {
    title: "Enable Voice Cloning (Pro Plans)",
    icon: (
      <img
        src="/images/solutionSectionIcon4.png"
        alt="Icon 5"
        className="w-8 h-8 object-fit"
      />
    ),
    desc: "Let clients upload a short voice clip and generate a fully human-like AI voice for phone or audio replies.",
    tag: "Finance, Healthcare, Legal",
  },
  {
    title: "Launch & Automate Everything",
    icon: (
      <img
        src="/images/solutionSectionIcon5.png"
        alt="Icon 6"
        className="w-8 h-8 object-fit"
      />
    ),
    desc: "Once setup is done, your agent will: Answer questions, Send audio replies...",
    tag: "Design, Development, Project Management",
  },
  {
    title: "Track Performance in Real-Time",
    icon: (
      <img
        src="/images/solutionSectionIcon6.png"
        alt="Icon 7"
        className="w-8 h-8 object-fit"
      />
    ),
    desc: "Manage it all from one powerful dashboard:\n– See analytics & usage\n– Configure flows\n– Add credits\n– Control billing & plans\n– Optimize performance",
    tag: "",
  },
  {
    title: "Built to Scale With Your Business",
    icon: (
      <img
        src="/images/solutionSectionIcon7.png"
        alt="Icon 8"
        className="w-8 h-8 object-fit"
      />
    ),
    desc: "Talkeen adapts to your team, clients, and goals. Add users, campaigns — all with a few clicks.",
    tag: "Finance, Healthcare, Legal",
  },
  {
    title: "One Platform. Infinite Possibilities.",
    icon: (
      <img
        src="/images/solutionSectionIcon8.png"
        alt="Icon 9"
        className="w-8 h-8 object-fit"
      />
    ),
    desc: "No tech skills required. Just log in, set up, and automate your business.",
    tag: "Retail, Marketing, Sales",
  },
];

const SolutionSection = () => {
  return (
    <section className="w-full px-6 md:px-16 py-16 bg-white">
      <div className="text-center mb-14 max-w-2xl mx-auto">
        {/* Welcome Button - Centered */}
        <div className="mb-3">
          <Button
            variant="outlined"
            sx={{
              borderColor: "#B6BCCD",
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
            Why Talkeen?
          </Button>
        </div>

        <h2 className="text-4xl md:text-4xl font-bold text-gray-900 mb-4">
          Why Talkeen is Different
        </h2>
        <p className="text-lg text-gray-600">
          Smart AI-Powered Automation That Actually Feels Human
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((item, i) => (
          <div
            key={i}
            className="h-[46vh] border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="mb-4 object-cover object-center h-fit w-fit text-black">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold mb-6 text-gray-900">
              {item.title}
            </h3>
            <p className="text-[16px] text-gray-500 mb-7">{item.desc}</p>
            {item.tag && <p className="text-sm text-zinc-700">{item.tag}</p>}
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center mt-20">
        <Button
          variant="outlined"
          sx={{
            borderColor: "#B6BCCD",
            py: 1.5,
            px: 3,
            fontSize: "14px",
            color: "#1D2A45",
            fontWeight: "bold",
            borderRadius: "13px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          Explore More Application
        </Button>
      </div>
    </section>
  );
};

export default SolutionSection;
