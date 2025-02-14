import React from "react";
import { Grid } from "@mui/material";

const Gallery = () => {
  const images = [
    {
      url: "https://photos.smugmug.com/Sri-Lanka-Design-Festival-SLDF-2024-Day-1/i-2gmtFX7/0/MLDQG4CgJBKS3zDZ35f4vqskm44DzPtZRzh6XwDQv/X4/20241107_111557_852-X4.jpg",
      title: "Wedding Party",
    },
    {
      url: "https://photos.smugmug.com/Sri-Lanka-Design-Festival-SLDF-2024-Day-4/i-xjZjNt6/0/MgtJNFnS6Pf8h2djfJZgbQ8PMBCD3hX5KkJd59JRm/X4/20241110_114819_972-X4.jpg",
      title: "Birthday Celebration",
    },
    {
      url: "https://photos.smugmug.com/Lakshan-Hasaine-Wedding-Photobooth/i-2nWFC4w/0/NcKSFcqDZChNtWjXkhBSR4qK6DN2MDcG6fcGvVBjx/X4/20240911_104803_515-X4.jpg",
      title: "Corporate Event",
    },
    {
      url: "https://photos.smugmug.com/Acuity-Lending-Bash-2024/i-GcmZN3L/0/NPBrHLsjqmzsH62VZjNDCTC9WphNRJWbdGZr8xDRj/X4/20240803_201149_136-X4.jpg",
      title: "Graduation Party",
    },
    {
      url: "https://photos.smugmug.com/Acuity-Lending-Bash-2024/i-bMGDC45/0/KSvfCH9bWbpjxjmHTS4LXS9ZVS3cpfGK7NTB8BvrB/X4/20240803_210543_742-X4.jpg",
      title: "Family Reunion",
    },
    {
      url: "https://photos.smugmug.com/Thomas-Gall-School-Annual-Staff-Celebration-2025/i-n3nMzJN/0/LnRjzKHR5Hn6CcFRWBVGqMrH5mCgSvLpt2L7X4Cgb/X4/20250201_125413_606-X4.jpg",
      title: "Anniversary",
    },
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
                    <h3 className="text-white text-xl font-semibold">
                      {image.title}
                    </h3>
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
