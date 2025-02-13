import React, { useState } from 'react';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import ImageIcon from '@mui/icons-material/Image';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PrintIcon from '@mui/icons-material/Print';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailIcon from '@mui/icons-material/Mail';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      text: "The photo booth was the highlight of my wedding! Everyone loved it!",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150"
    },
    {
      name: "Mike Chen",
      text: "Professional service and amazing quality prints. Highly recommended!",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150"
    },
    {
      name: "Emily Davis",
      text: "Our corporate event was a huge success thanks to the photo booth!",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150"
    }
  ];

  const photoStrips = [
    {
      photos: [
        "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7",
        "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3",
        "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf"
      ],
      eventName: "Sarah & John's Wedding"
    },
    {
      photos: [
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622",
        "https://images.unsplash.com/photo-1470897655254-05feb2d2ab97",
        "https://images.unsplash.com/photo-1470753937643-efeb931202a9"
      ],
      eventName: "Corporate Party 2025"
    },
    {
      photos: [
        "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7",
        "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3",
        "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf"
      ],
      eventName: "Birthday Bash"
    },
    {
      photos: [
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622",
        "https://images.unsplash.com/photo-1470897655254-05feb2d2ab97",
        "https://images.unsplash.com/photo-1470753937643-efeb931202a9"
      ],
      eventName: "New Year's Eve"
    }
  ];

  const galleryImages = [
    "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=600&h=400",
    "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=600&h=400",
    "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&h=400",
    "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=600&h=400",
    "https://images.unsplash.com/photo-1470897655254-05feb2d2ab97?auto=format&fit=crop&w=600&h=400",
    "https://images.unsplash.com/photo-1470753937643-efeb931202a9?auto=format&fit=crop&w=600&h=400"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 flex items-center">
              <CameraAltIcon className="h-8 w-8 text-pink-500" />
              <span className="ml-2 text-xl font-bold text-gray-900">SnapJoy Booth</span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-700 hover:text-pink-500 px-3 py-2">About</a>
              <a href="#formats" className="text-gray-700 hover:text-pink-500 px-3 py-2">Formats</a>
              <a href="#gallery" className="text-gray-700 hover:text-pink-500 px-3 py-2">Gallery</a>
              <a href="#testimonials" className="text-gray-700 hover:text-pink-500 px-3 py-2">Testimonials</a>
              <a href="#contact" className="text-gray-700 hover:text-pink-500 px-3 py-2">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="absolute w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=1920&q=80"
        >
          <source src="https://player.vimeo.com/external/373239380.hd.mp4?s=ea0a448c066cde6c4fcb0bba636183c3c3f9f58f&profile_id=175&oauth2_token_id=57447761" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Capture the Moment,<br />Keep the Memory!
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Create unforgettable memories with our premium photo booth experience
          </p>
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-pink-600 transition-colors"
          >
            Book Now
            <ChevronRightIcon className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We bring the fun to your events with state-of-the-art photo booths, premium prints,
              and an experience your guests will never forget.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <CameraAltIcon className="w-12 h-12 text-pink-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Premium Equipment</h3>
              <p className="text-gray-600">Professional DSLR cameras and lighting for studio-quality photos</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <PrintIcon className="w-12 h-12 text-pink-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Instant Prints</h3>
              <p className="text-gray-600">High-quality prints in seconds with our professional printers</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <FavoriteIcon className="w-12 h-12 text-pink-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Fun Props</h3>
              <p className="text-gray-600">Wide selection of props and backgrounds for endless creativity</p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Photo Formats Section */}
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
                  <div key={index} className="group relative">
                    <div className="bg-white p-3 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105">
                      <div className="space-y-2">
                        {strip.photos.map((photo, photoIndex) => (
                          <div key={photoIndex} className="aspect-square rounded-lg overflow-hidden">
                            <img
                              src={`${photo}?auto=format&fit=crop&w=300&h=300`}
                              alt={`Strip ${index + 1} Photo ${photoIndex + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ))}
                        <div className="pt-2 border-t border-gray-100 text-center">
                          <div className="flex items-center justify-center space-x-1">
                            <CameraAltIcon className="w-4 h-4 text-pink-500" />
                            <span className="text-sm font-medium text-gray-800">{strip.eventName}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Thank You Card Format */}
            <div className="group relative">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Elegant Thank You Card</h3>
                <p className="text-gray-600">Premium single shot with custom branding</p>
              </div>
              
              <div className="relative bg-white p-6 rounded-2xl shadow-xl transform transition-transform duration-300 hover:scale-105">
                <div className="aspect-[7/5] bg-white rounded-xl overflow-hidden shadow-lg">
                  <div className="relative h-full">
                    <div className="h-4/5 overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&h=600"
                        alt="Thank You Card"
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    
                    <div className="absolute bottom-0 left-0 right-0 h-1/5 bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-between px-6">
                      <div className="flex items-center space-x-3">
                        <CameraAltIcon className="w-8 h-8 text-white" />
                        <div className="text-white">
                          <p className="font-bold">Thank You!</p>
                          <p className="text-sm opacity-90">For being part of our special day</p>
                        </div>
                      </div>
                      <p className="text-white font-medium">DD.MM.YYYY</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Format Features */}
          <div className="mt-20 grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mb-4">
                <ImageIcon className="w-6 h-6 text-pink-500" />
              </div>
              <h4 className="text-lg font-semibold mb-2">High Resolution</h4>
              <p className="text-gray-600">Crystal clear photos that capture every detail</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mb-4">
                <PrintIcon className="w-6 h-6 text-pink-500" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Instant Printing</h4>
              <p className="text-gray-600">Get your photos in seconds</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mb-4">
                <FavoriteIcon className="w-6 h-6 text-pink-500" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Custom Branding</h4>
              <p className="text-gray-600">Add your event details and personal touch</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Gallery</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative group overflow-hidden rounded-xl">
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-64 object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <PlayCircleIcon className="w-12 h-12 text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">How It Works</h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <CameraAltIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Snap</h3>
              <p className="text-gray-600">Strike your best pose in our booth</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <ImageIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Choose</h3>
              <p className="text-gray-600">Select your favorite shot</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <PrintIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Print</h3>
              <p className="text-gray-600">Get your instant prints</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <FavoriteIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Enjoy</h3>
              <p className="text-gray-600">Share and cherish the memories</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">What Our Clients Say</h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`transition-opacity duration-300 ${
                    index === activeTestimonial ? 'opacity-100' : 'opacity-0 absolute inset-0'
                  }`}
                >
                  <div className="text-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-24 h-24 rounded-full mx-auto mb-6 object-cover"
                    />
                    <p className="text-xl text-gray-600 mb-6">{testimonial.text}</p>
                    <div className="flex items-center justify-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === activeTestimonial ? 'bg-pink-500' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Get In Touch</h2>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-pink-500 text-white px-6 py-3 rounded-md hover:bg-pink-600 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50"
      >
        <WhatsAppIcon className="w-6 h-6" />
      </a>

      {/* Footer */}
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
    </div>
  );
}

export default App;