import React from 'react';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Bride',
    quote: 'The photo booth was the highlight of our wedding! Our guests couldn\'t stop taking pictures and the quality was amazing.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200'
  },
  {
    name: 'Michael Chen',
    role: 'Event Organizer',
    quote: 'Professional service and top-notch equipment. The team was incredibly helpful and the photos turned out beautifully.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200'
  },
  {
    name: 'Emily Williams',
    role: 'Birthday Girl',
    quote: 'Best decision for my 30th birthday party! The props were fun and everyone loved the instant prints.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200'
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16">What Our Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <FormatQuoteIcon 
                    className="absolute -bottom-2 -right-2 text-pink-500 bg-white rounded-full p-1"
                    style={{ fontSize: '2rem' }}
                  />
                </div>
              </div>
              <blockquote className="text-gray-700 text-center mb-6">
                "{testimonial.quote}"
              </blockquote>
              <div className="text-center">
                <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                <p className="text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;