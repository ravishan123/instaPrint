import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with flashlight effect */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black">
          <img
            src="https://photos.smugmug.com/photos/i-sjpfMPw/0/Kq4ngnnxgqfctcgT2XzTj6c4k4CgSLDp2dPvv2Fgj/XL/i-sjpfMPw-XL.jpg"
            alt="Hero Background"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 flashlight-effect"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative text-center text-white px-4 z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Capture the Moment,
          <br />
          Keep the Memory!
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto animate-fade-in-delay">
          Create unforgettable memories with our premium photo booth experience
        </p>
        <a
          href="https://wa.me/1234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-pink-600 transition-colors animate-fade-in-delay-2"
        >
          Book Now
          <ChevronRightIcon className="ml-2 h-5 w-5" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
