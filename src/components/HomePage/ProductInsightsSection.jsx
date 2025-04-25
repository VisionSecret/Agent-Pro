import { Button } from "@mui/material";
import CallMadeIcon from '@mui/icons-material/CallMade';

const ProductInsightsSection = () => {
  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
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
          Talkeen Products
        </Button>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Column - Text Content */}
        <div className="md:w-1/2 w-full space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-[#111827] mt-4 md:mt-0">
            Elevate Your <span className="text-[#9D9D9D]">Product </span>
            Insights with ease!
          </h2>

          <p className="text-[#9D9D9D] text-lg">
            Get real-time insights, streamline your sales pipeline, and boost
            your team's productivity with our cutting-edge Sales Overview
            platform.
          </p>

          <Button
            variant="outlined"
            endIcon={<CallMadeIcon />}
            sx={{
              backgroundColor: "#111815",
              padding: "8px 22px",
              borderRadius: "6px",
              fontSize: "16px",
              color: "#fff",
              fontWeight: 600,
              textTransform: "capitalize",
              "&:hover": {
                backgroundColor: "#111827",
              },
            }}
          >
            Get Started for Free
          </Button>
        </div>

        {/* Right Column - Image */}
        <div className="md:w-1/2 w-full order-first md:order-last">
          <img
            src="https://images.unsplash.com/photo-1556745757-8d76bdb6984b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80"
            alt="Product Insights Dashboard"
            className="rounded-xl shadow-2xl w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductInsightsSection;
