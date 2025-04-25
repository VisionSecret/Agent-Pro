import { Button } from "@mui/material";
import { useState } from "react";

const faqs = [
  {
    q: "What is Talkeen?",
    a: "Talkeen is an intelligent AI platform that helps service businesses communicate with their customers automatically, just like a real person would. Our AI agents sell, answer messages, schedule appointments, provide information, follow up with leads, and even make voice calls with realistic cloned voices. It's like having a 24/7 sales and service team that never sleeps and knows your business inside out.",
  },
  {
    q: "Does the AI really sound human?",
    a: "Yes! Talkeen uses advanced voice cloning to make the conversation feel natural and human-like.",
  },
  {
    q: "Do I need to be tech–savvy to use Talkeen?",
    a: "Not at all. Talkeen is built for ease-of-use so anyone can get started with no technical skills.",
  },
  {
    q: "Can I train the AI to fit my business?",
    a: "Absolutely. Talkeen lets you customize responses, train on your data, and match your brand tone.",
  },
  {
    q: "Is it safe to let the AI talk to my clients?",
    a: "Yes, we ensure all conversations are secure and your data is protected.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10">
      {/* Left Info */}
      <div className="">
        <div className="mb-3">
          <Button
            variant="outlined"
            sx={{
              borderColor: "#B6BCCD",
              py: 0.5,
              px: 1.5,
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
            FAQ
          </Button>
        </div>
        <h2 className="max-w-md text-3xl md:text-4xl text-[#111827] font-semibold mb-5">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-400 font-medium text-sm">
          Find Answers to Common Questions About AgentyPro
        </p>
      </div>

      {/* Right Accordion */}
      <div className="space-y-10">
        {faqs.map((item, idx) => (
          <div key={idx} className="border-b border-gray-200 pb-4">
            <button
              onClick={() => toggle(idx)}
              className="flex justify-between items-start w-full text-left"
            >
              <div className="flex gap-3">
                <div className="text-zinc-800 font-black text-lg">|</div>
                <span className="font-bold text-lg text-gray-800">
                  {item.q}
                </span>
              </div>
            </button>
            {openIndex === idx && (
              <div className="pt-3 text-gray-500 text-sm font-medium transition-all duration-300">
                {item.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
