import { Button } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const HeroSection = () => {
  return (
    <section className="bg-white pb-6 pt-16 sm:px-6 sm:py-20 w-full min-h-screen">
      <div className="flex flex-col items-center justify-center w-full md:max-w-6xl mx-auto text-center">
        {/* Welcome Button - Centered */}
        <div className="mb-3">
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
            Welcome to Talkeen
          </Button>
        </div>

        {/* Main Heading - Centered */}
        <div className="hidden md:block  mb-5 px-4 leading-tight">
          <h2 className="text-6xl font-bold text-gray-900">The Commercial</h2>
          <h2 className="text-[56px] font-bold text-gray-900">
            Train Behind <span className="text-[#9D9D9D]">Your </span>Business.
          </h2>
        </div>

        <h1 className="block md:hidden text-[32px] font-bold text-gray-900 mb-5 tracking-tighter leading-tighter">
          Say goodbye to bots. Say{" "}
          <span className="text-[#9D9D9D]">Hello </span> to Talkeen
        </h1>

        {/* Description Text - Centered */}
        <p className="hidden md:block text-lg text-center font-medium text-gray-600 mb-12 max-w-3xl px-3">
          Talkeen is the ultra-intelligent AI system that speaks and sells for
          you—on WhatsApp, voice calls, and more.
        </p>

        <p className="block md:hidden text-sm tracking-tighter font-medium text-gray-500 my-3 max-w-3xl px-4">
          Talkeen is the AI revolution that transforms boring, robotic chats
          into intelligent, human-like conversations that feel real — and drive
          results.
        </p>
        <p className="block md:hidden text-sm tracking-tighter font-medium text-gray-500 mb-16 max-w-4xl px-3.5">
          From sales and support to bookings and quotes, our AI agents sound
          like real people, work 24/7, and never make mistakes.They talk. They
          listen. They convert. Automatically.
        </p>

        {/* Buttons - Centered */}
        <div className="hidden md:flex flex-col sm:flex-row gap-4 mb-16">
          <Button
            variant="contained"
            sx={{
              bgcolor: "#111827",
              color: "#FFFFFF",
              py: 1.5,
              px: 2,
              fontSize: "15px",
              fontWeight: "bold",
              textTransform: "capitalize",
              "&:hover": { bgcolor: "#111827" },
              borderRadius: "10px",
            }}
          >
            Start Free - No Card Needed
          </Button>

          <Button
            variant="outlined"
            startIcon={<PlayArrowIcon fontSize="large" />}
            sx={{
              borderColor: "#111827",
              color: "#4B5162",
              py: 1.5,
              px: 2,
              textTransform: "capitalize",
              fontSize: "15px",
              fontWeight: "bold",
              "&:hover": { borderColor: "#111827" },
              borderRadius: "10px",
            }}
          >
            Watch Talkeen in Action
          </Button>
        </div>

        {/* Mobile Buttons - Centered */}
        <div className="flex md:hidden w-full flex-col sm:flex-row gap-4 mb-16">
          <Button
            variant="contained"
            sx={{
              bgcolor: "#111827",
              color: "#FFFFFF",
              py: 1.5,
              px: 4,
              fontSize: "13px",
              fontWeight: 600,
              textTransform: "capitalize",
              "&:hover": { bgcolor: "#111829" },
              borderRadius: "12px",
            }}
          >
            Start Your - Free Trial
          </Button>

          <Button
            variant="outlined"
            startIcon={<PlayArrowIcon fontSize="large" />}
            sx={{
              borderColor: "#111827",
              color: "#4B5162",
              py: 1.5,
              px: 3,
              textTransform: "capitalize",
              fontSize: "13px",
              fontWeight: 600,
              "&:hover": { borderColor: "#111829" },
              borderRadius: "12px",
            }}
          >
            Watch video
          </Button>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <img
          src="/images/dashboardImage.png"
          alt="Dashboard Image"
          className="hidden md:block w-full h-auto"
        />
        <img
          src="/images/HomeScreen.png"
          alt="Dashboard Image"
          className="block md:hidden w-full h-auto"
        />
      </div>
    </section>
  );
};

export default HeroSection;
