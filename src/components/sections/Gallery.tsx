import React from 'react';
import { Grid } from '@mui/material';

const Gallery = () => {
  const images = [
    {
      url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800',
      title: 'Wedding Party'
    },
    {
      url: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=800',
      title: 'Birthday Celebration'
    },
    {
      url: 'https://images.unsplash.com/photo-1470753937643-efeb931202a9?auto=format&fit=crop&w=800',
      title: 'Corporate Event'
    },
    {
      url: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=800',
      title: 'Graduation Party'
    },
    {
      url: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800',
      title: 'Family Reunion'
    },
    {
      url: 'https://images.unsplash.com/photo-1470897655254-05feb2d2ab97?auto=format&fit=crop&w=800',
      title: 'Anniversary'
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16">Our Gallery</h2>
        <Grid container spacing={4}>
          {images.map((image, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <div className="group relative overflow-hidden rounded-xl shadow-lg">
                <div className="aspect-square">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white text-xl font-semibold">{image.title}</h3>
                  </div>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </section>
  );
};

export default Gallery;