import React from 'react';
import CameraAltIcon from '@mui/icons-material/CameraAlt';

interface PhotoStripProps {
  photos: string[];
  eventName: string;
}

const PhotoStrip = ({ photos, eventName }: PhotoStripProps) => {
  return (
    <div className="group relative">
      <div className="bg-white p-3 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105">
        <div className="space-y-2">
          {photos.map((photo, index) => (
            <div key={index} className="aspect-square rounded-lg overflow-hidden">
              <img
                src={`${photo}?auto=format&fit=crop&w=300&h=300`}
                alt={`Strip Photo ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          <div className="pt-2 border-t border-gray-100 text-center">
            <div className="flex items-center justify-center space-x-1">
              {/* <CameraAltIcon className="w-4 h-4 text-pink-500" /> */}
              <span className="text-sm font-medium text-gray-800">{eventName}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoStrip;