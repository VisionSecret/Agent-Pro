import React, { useState } from "react";
import { Button } from "@mui/material";

const plans = [
  {
    name: "Plan Free",
    price: "$0",
    description: "For testing the power of Talkeen",
    cta: "Get Started Now",
    features: [
      "Up to 10 conversations/month",
      "Up to 2 minutes of human-like AI voice calls",
      "Up to 2 minutes of human-like AI video calls",
      "Access to 1 prebuilt (trained by industry)",
      "Integration with WhatsApp/business web",
      "Basic CRM included",
      "No voice cloning (default voice only)",
      "Remote-user access",
      "No onboarding meeting (self-guided tutorials only)",
    ],
    highlighted: false,
  },
  {
    name: "Starter Plan",
    price: "$79",
    description: "All Essentials to Start Automating",
    cta: "Get Started Now",
    features: [
      "Up to 750 conversations/month",
      "10 minutes of human-like AI voice calls",
      "Default AI voice (no voice cloning)",
      "Access to industry-specific prebuilt funnels",
      "Native CRM + external CRM integration",
      "Multichannel integrations",
      "Access to tutorials and resources",
      "Visual dashboard with usage and performance reports",
      "1 implementation meeting",
    ],
    highlighted: false,
  },
  {
    name: "Professional",
    price: "$179",
    description: "Full Automation + CRM Power",
    cta: "Get Started Now",
    features: [
      "Everything in the Starter Plan, plus:",
      "Up to 2100 conversations/month",
      "20 minutes of AI voice calls",
      "1 personalized voice cloning included",
      "Unlimited AI agents per channel",
      "Access to prebuilt funnels + basic customization",
      "Campaign automation",
      "Native CRM + external CRM integration",
      "Full multichannel integrations",
      "Multi-user access with role permissions",
      "Priority technical support",
      "Visual dashboard with usage and performance reports",
      "1 advanced implementation meeting",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "$279",
    description: "Full Customization and Scale",
    cta: "Get Started Now",
    features: [
      "Everything in the Growth Plan, plus:",
      "Up to 4500 conversations/month",
      "45 minutes of AI voice calls",
      "Up to 2 personalized voice clonings",
      "Unlimited AI agents + advanced flow logic",
      "Advanced funnels by industry",
      "Early access to new features",
      "Full CRM included + external CRM integration",
      "Full integrations with all communication channels",
      "Multi-user access with role permissions",
      "Premium strategic support",
      "Visual dashboard with usage and performance reports",
      "1 strategic implementation meeting",
    ],
    highlighted: false,
  },
];

const PricingSection = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="w-full px-4 sm:px-6 py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center mb-12">
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
            Talkeen Pricing
          </Button>
        </div>

        {/* Header */}
        <div className="text-center mb-12 px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-3">
            Powerful Features For{" "}
            <span className="text-[#9D9D9D]"> Powerful</span> Businesses
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose a plan that's right for you
          </p>

          {/* Toggle */}
          <div className="flex items-center justify-center mt-6 gap-4">
            <span
              className={`text-lg ${
                !isYearly ? "font-bold text-gray-900" : "text-gray-500"
              }`}
            >
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative inline-flex h-6 w-12 items-center rounded-full transition-colors ${
                isYearly ? "bg-blue-600" : "bg-gray-300"
              }`}
            >
              <span
                className={`inline-block h-5 w-5 transform rounded-full bg-white shadow-md transition-transform ${
                  isYearly ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
            <div className="flex items-center gap-2">
              <span
                className={`text-lg ${
                  isYearly ? "font-bold text-blue-600" : "text-gray-500"
                }`}
              >
                Yearly
              </span>
              <span className="px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                Save 20%
              </span>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-xl p-6 shadow-sm transition-all duration-300 ${
                plan.highlighted
                  ? "bg-gradient-to-b from-blue-600 to-blue-800 text-white transform lg:-translate-y-4 border-2 border-blue-500"
                  : "bg-white border border-gray-200"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  POPULAR
                </div>
              )}

              <div className="h-full flex flex-col">
                <div className="mb-4">
                  <h3
                    className={`text-xl font-bold ${
                      plan.highlighted ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className={`text-sm ${
                      plan.highlighted ? "text-blue-100" : "text-gray-500"
                    }`}
                  >
                    {plan.description}
                  </p>
                </div>

                <div className="mb-6">
                  <p
                    className={`text-3xl font-bold ${
                      plan.highlighted ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {plan.price}
                    <span
                      className={`text-base font-normal ${
                        plan.highlighted ? "text-blue-200" : "text-gray-500"
                      }`}
                    >
                      /month
                    </span>
                  </p>
                  {isYearly && (
                    <p
                      className={`text-sm ${
                        plan.highlighted ? "text-blue-200" : "text-gray-500"
                      }`}
                    >
                      {`$${Math.round(
                        parseInt(plan.price.replace("$", "")) * 0.8 * 12
                      )}/year`}
                    </p>
                  )}
                </div>

                <Button
                  variant={plan.highlighted ? "contained" : "outlined"}
                  color={plan.highlighted ? "secondary" : "primary"}
                  fullWidth
                  className={`mt-auto ${
                    plan.highlighted
                      ? "bg-white text-blue-600 hover:bg-gray-50"
                      : "hover:bg-blue-50"
                  }`}
                >
                  {plan.cta}
                </Button>

                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg
                        className={`flex-shrink-0 h-5 w-5 mr-2 ${
                          plan.highlighted ? "text-blue-300" : "text-blue-500"
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span
                        className={`text-sm ${
                          plan.highlighted ? "text-blue-50" : "text-gray-600"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
