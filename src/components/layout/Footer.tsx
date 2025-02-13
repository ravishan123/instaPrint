import React from 'react';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <CameraAltIcon className="h-8 w-8 text-pink-500" />
              <span className="ml-2 text-xl font-bold">SnapJoy Booth</span>
            </div>
            <p className="text-gray-400">
              Creating memories that last a lifetime through the magic of photography.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Business Hours</h3>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center">
                <AccessTimeIcon className="w-5 h-5 mr-2" />
                <span>Mon-Fri: 9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex items-center">
                <AccessTimeIcon className="w-5 h-5 mr-2" />
                <span>Sat-Sun: 10:00 AM - 4:00 PM</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <InstagramIcon className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FacebookIcon className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <TwitterIcon className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} SnapJoy Booth. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;