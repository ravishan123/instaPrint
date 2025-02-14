import React from 'react';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import PeopleIcon from '@mui/icons-material/People';
import PrintIcon from '@mui/icons-material/Print';

const features = [
  {
    icon: <CameraAltIcon className="w-6 h-6" />,
    title: 'Professional Equipment',
    description: 'High-end DSLR cameras and studio-quality lighting for perfect shots every time.'
  },
  {
    icon: <AutoAwesomeIcon className="w-6 h-6" />,
    title: 'Custom Props & Backdrops',
    description: 'Wide selection of themed props and beautiful backdrops to match your event.'
  },
  {
    icon: <PeopleIcon className="w-6 h-6" />,
    title: 'Friendly Staff',
    description: 'Experienced attendants to help your guests create memorable moments.'
  },
  {
    icon: <PrintIcon className="w-6 h-6" />,
    title: 'Instant Prints',
    description: 'High-quality prints delivered in seconds, with digital copies included.'
  }
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Column */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800"
                alt="Photo Booth Experience"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-lg">
              <div className="text-center">
                <h3 className="text-4xl font-bold text-pink-500">5+</h3>
                <p className="text-gray-600">Years of Experience</p>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold mb-6">Creating Memories That Last Forever</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                At SnapJoy Booth, we believe every moment is worth capturing. Since 2018, 
                we've been bringing joy and laughter to events across the country with our 
                premium photo booth experiences. Our mission is to transform ordinary events 
                into extraordinary memories.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                  <div className="bg-pink-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <div className="text-pink-500">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;