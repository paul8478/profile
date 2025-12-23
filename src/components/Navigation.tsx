export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-md p-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo / Name */}
        <div className="text-white text-lg font-semibold">
          Somnath Paul
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-8">
          <a 
            href="#home" 
            className="text-white text-sm font-medium hover:text-gray-300 transition-colors py-4 px-4"
          >
            Home
          </a>
          <a 
            href="#projects" 
            className="text-white text-sm font-medium hover:text-gray-300 transition-colors py-4 px-4"
          >
            Projects
          </a>
          <a 
            href="#youtube" 
            className="text-white text-sm font-medium hover:text-gray-300 transition-colors py-4 px-4"
          >
            Youtube
          </a>
          <a 
            href="#contact" 
            className="text-white text-sm font-medium hover:text-gray-300 transition-colors py-4 px-4"
          >
            Contact me
          </a>
        </div>
      </div>
    </nav>
  );
}
