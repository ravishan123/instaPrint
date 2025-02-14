import React from "react";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

const ThankYouCard = () => {
  return (
    <div className="group relative">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Elegant Thank You Card
        </h3>
        <p className="text-gray-600">
          Premium single shot with custom branding
        </p>
      </div>

      <div className="relative bg-white p-6 rounded-2xl shadow-xl transform transition-transform duration-300 hover:scale-105">
        <div className="aspect-[7/5] bg-white rounded-xl overflow-hidden shadow-lg">
          <div className="relative h-full">
            <div className="h-5/5 overflow-hidden">
              <img
                src="/weding.jpg"
                alt="Thank You Card"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* <div className="absolute bottom-0 left-0 right-0 h-1/5 bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-between px-6">
              <div className="flex items-center space-x-3">
                <CameraAltIcon className="w-8 h-8 text-white" />
                <div className="text-white">
                  <p className="font-bold">MOHIT & THILINI</p>
                  <p className="text-sm opacity-90">Sri Lanka</p>
                </div>
              </div>
              <p className="text-white font-medium">2025</p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYouCard;
