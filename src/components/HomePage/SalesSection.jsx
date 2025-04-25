import { Button, Typography, Box } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";

const SalesSection = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Welcome Button - Centered */}
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
            Talkeen AI
          </Button>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left Column - Image */}
          <div className="md:w-1/2 w-full">
            <img
              src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80"
              alt="AI Sales Assistant"
              className="rounded-xl shadow-2xl w-full h-auto object-cover"
            />
          </div>

          {/* Right Column - Content */}
          <div className="md:w-1/2 w-full space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tighter mt-4 md:mt-0">
              AI-Powered <span className="text-[#9D9D9D]">Sales </span>
              Revolution
            </h1>

            {/* Use Box component instead of Typography for paragraphs containing divs */}
            <Box component="div" className="text-gray-600 text-lg space-y-6">
              <Typography component="p" variant="body1">
                Automate conversations, boost sales, and simplify customer
                engagement — all with AI agents that understand, talk, and act
                like real humans.
              </Typography>

              <Typography component="p" variant="body1">
                No delays. No missed leads. Just smart, efficient automation
                working 24/7 for your business.
              </Typography>

              {/* Feature List */}
              <div className="space-y-3 mt-6">
                {[
                  "Instant response to customer inquiries",
                  "Natural human-like conversations",
                  "24/7 availability with zero downtime",
                  "Seamless integration with your CRM",
                  "Real-time analytics and insights",
                ].map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <div className="flex-shrink-0 h-6 w-6 text-blue-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </Box>

            {/* Button below content */}
            <Button
              variant="outlined"
              endIcon={<ArrowForward />}
              sx={{
                borderColor: "#111827",
                padding: "8px 22px",
                borderRadius: "6px",
                fontSize: "16px",
                color: "#111827",
                fontWeight: 600,
                textTransform: "capitalize",
                "&:hover": {
                  borderColor: "#111827",
                },
              }}
            >
              Get Started with AI Sales
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesSection;
