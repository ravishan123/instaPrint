import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import PhotoFormats from './components/sections/PhotoFormats';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <PhotoFormats />
      
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
  );
}

export default App;