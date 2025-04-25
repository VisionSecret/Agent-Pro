import { Box, Button, Typography } from "@mui/material";
import DesignServices from "@mui/icons-material/DesignServices";
import Palette from "@mui/icons-material/Palette";
import Code from "@mui/icons-material/Code";
import Analytics from "@mui/icons-material/Analytics";
import Cloud from "@mui/icons-material/Cloud";
import Settings from "@mui/icons-material/Settings";

const ToolsSection = () => {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
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
            Talkeen with Tools
          </Button>
        </div>

        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
          Simplify Your Creative <span className="text-[#9D9D9D]">Toolkit</span>
        </h2>

        {/* Tools Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {[
            {
              icon: (
                <DesignServices className="text-blue-600" fontSize="large" />
              ),
              title: "Visual Design Suite",
              description:
                "Create stunning visuals with our intuitive drag-and-drop interface",
            },
            {
              icon: <Palette className="text-purple-600" fontSize="large" />,
              title: "Color Management",
              description: "Advanced color palettes and style guide generator",
            },
            {
              icon: <Code className="text-green-600" fontSize="large" />,
              title: "Code Export",
              description: "Export production-ready code for any platform",
            },
            {
              icon: <Analytics className="text-orange-600" fontSize="large" />,
              title: "Performance Analytics",
              description: "Real-time design system analytics",
            },
            {
              icon: <Cloud className="text-red-600" fontSize="large" />,
              title: "Cloud Sync",
              description: "Automatic version control & team collaboration",
            },
            {
              icon: <Settings className="text-indigo-600" fontSize="large" />,
              title: "Smart Automation",
              description: "AI-powered design optimization tools",
            },
          ].map((tool, index) => (
            <Box
              key={index}
              className="p-8 bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-col items-start space-y-4">
                <div className="p-3 bg-blue-50 rounded-lg">{tool.icon}</div>
                <Typography
                  variant="h5"
                  className="text-xl font-semibold text-gray-900"
                >
                  {tool.title}
                </Typography>
                <Typography variant="body1" className="text-gray-600">
                  {tool.description}
                </Typography>
              </div>
            </Box>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Button
            variant="outlined"
            sx={{
              backgroundColor: "#111827",
              padding: "8px 22px",
              borderRadius: "6px",
              fontSize: "16px",
              color: "#ffffff",
              fontWeight: 600,
              textTransform: "capitalize",
              "&:hover": {
                backgroundColor: "#111827",
              },
            }}
          >
            Explore All Features
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ToolsSection;
