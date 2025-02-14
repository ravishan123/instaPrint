const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <img
              src="/logo.png"
              alt="SnapJoy Booth Logo"
              className="h-20 w-auto object-contain"
            />
          </div>

          <div className="hidden md:flex space-x-8">
            <a
              href="#about"
              className="text-gray-700 hover:text-pink-500 px-3 py-2"
            >
              About
            </a>
            <a
              href="#formats"
              className="text-gray-700 hover:text-pink-500 px-3 py-2"
            >
              Formats
            </a>
            <a
              href="#gallery"
              className="text-gray-700 hover:text-pink-500 px-3 py-2"
            >
              Gallery
            </a>
            <a
              href="#testimonials"
              className="text-gray-700 hover:text-pink-500 px-3 py-2"
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-pink-500 px-3 py-2"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
