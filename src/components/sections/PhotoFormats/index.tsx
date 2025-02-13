import React from 'react';
import PhotoStrip from './PhotoStrip';
import ThankYouCard from './ThankYouCard';
import { photoStrips } from '../../../data/photoStrips';

const PhotoFormats = () => {
  return (
    <section id="formats" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16">Capture Your Style</h2>
        
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Photo Strips Container */}
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Classic Photo Strips</h3>
              <p className="text-gray-600">Three perfect moments in one stylish strip</p>
            </div>
            
            <div className="grid grid-cols-2 gap-8">
              {photoStrips.map((strip, index) => (
                <PhotoStrip key={index} {...strip} />
              ))}
            </div>
          </div>
          
          {/* Thank You Card */}
          <ThankYouCard />
        </div>
      </div>
    </section>
  );
};

export default PhotoFormats;