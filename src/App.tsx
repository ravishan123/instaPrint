import React, { useEffect } from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import PhotoFormats from "./components/sections/PhotoFormats";
import Gallery from "./components/sections/Gallery";
import Testimonials from "./components/sections/Testimonials";
import Contact from "./components/sections/Contact";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ec4899", // pink-500
    },
    secondary: {
      main: "#6b7280", // gray-500
    },
  },
});

function App() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      document.documentElement.style.setProperty("--mouse-x", `${x}%`);
      document.documentElement.style.setProperty("--mouse-y", `${y}%`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Hero />
        <About />
        <PhotoFormats />
        <Gallery />
        <Testimonials />
        <Contact />

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/1234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-8 right-8 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50"
        >
          <WhatsAppIcon className="w-6 h-6" />
        </a>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
