import { Button } from "./ui/button";
import "../css/home.css"; 
export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 home-bg ">
      <div className="max-w-4xl mx-auto text-center ">
        {/* Main Heading */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
            <span className="text-gray-400 block mb-2">A Fabulous</span>
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
             Web &  AIML Developer
            </span>
          </h1>
        </div>

        {/* Character and Description */}
        <div className="flex flex-col items-center mb-8">
          <div className="text-6xl mb-4 animate-bounce">
            👋
          </div>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
            👋 My name is Somnath Paul, and I am a <span className="text-blue-400">Web & AIML developer</span> living in
            <br />
            West Bengal, India building immersive apps with the <span className="text-blue-400">coolest tech!</span>
          </p>
        </div>

        {/* CTA Button */}
        <Button 
          className="bg-gradient-to-r from-orange-400 to-pink-400 hover:from-orange-500 hover:to-pink-500 text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105"
        >
          Get Resume
        </Button>
      </div>
    </section>
  );
}