import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function LandingLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="px-4 sm:px-20">{children}</main>
      <Footer />
    </>
  );
}
