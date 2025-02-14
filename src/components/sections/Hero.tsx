import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute w-full h-full object-cover"
        poster="/hero.jpg"
      >
        <source
          src="https://player.vimeo.com/external/373239380.hd.mp4?s=ea0a448c066cde6c4fcb0bba636183c3c3f9f58f&profile_id=175&oauth2_token_id=57447761"
          type="video/mp4"
        />
      </video>
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Capture the Moment,
          <br />
          Keep the Memory!
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
  );
};

export default Hero;
