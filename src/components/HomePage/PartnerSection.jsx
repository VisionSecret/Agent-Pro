import React from "react";

const PartnerSection = () => {
  return (
    <div className="min-h-80 w-full flex flex-col items-center justify-center md:px-20 md:py-10 md:mb-20 bg-white shadow-sm rounded-2xl">
      <div className="hidden md:flex flex-col justify-center items-center mb-10">
        <p className="text-lg md:text-xl font-medium mb-2 text-gray-800 leading-relaxed max-w-2xl">
          Powered by World-Class AI & Automation Technologies
        </p>
        <p className="text-gray-600 text-lg font-medium">
          We build with the best — so you don't have to.
        </p>
      </div>

      <p className="block md:hidden text-lg text-center mb-10 text-gray-500 leading-tight max-w-3xl">
        160,000+ customers in over 120 countries grow their businesses with
        Neuros
      </p>

      <div className="w-3/4 hidden md:flex items-center justify-between flex-wrap">
        {[
          { src: "/images/ChatGPT.png", alt: "ChatGPT" },
          { src: "/images/ElevenLabs.png", alt: "ElevenLabs" },
          { src: "/images/Twilio.png", alt: "Twilio" },
          { src: "/images/Stripe.png", alt: "Stripe" },
        ].map((logo, i) => (
          <img
            key={i}
            src={logo.src}
            alt={logo.alt}
            className="h-14 w-14 md:h-16 md:w-16 object-contain transition-transform hover:scale-105"
          />
        ))}
      </div>

        {/* Mobile Side */}
      <div className="w-full md:hidden flex items-center justify-between gap-2 flex-wrap">
        {[
          { src: "/images/mobileLogo1.png", alt: "Collab Logo" },
          { src: "/images/mobileLogo2.png", alt: "Collab Logo" },
          { src: "/images/mobileLogo3.png", alt: "Collab Logo" },
          { src: "/images/mobileLogo4.png", alt: "Collab Logo" },
        ].map((logo, i) => (
          <img
            key={i}
            src={logo.src}
            alt={logo.alt}
            className="h-9 w-fit object-cover transition-transform hover:scale-105"
          />
        ))}
      </div>
    </div>
  );
};

export default PartnerSection;
