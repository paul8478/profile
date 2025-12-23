import { Button } from "./ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Hi, I'm Alex Chen
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            A passionate <span className="text-primary">Full Stack Developer</span> creating 
            beautiful and functional web applications with modern technologies.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button size="lg" className="min-w-[200px]">
              View My Work
            </Button>
            <Button variant="outline" size="lg" className="min-w-[200px]">
              Download Resume
            </Button>
          </div>

          <div className="flex items-center justify-center space-x-6 mb-12">
            <a 
              href="https://github.com" 
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a 
    href="https://linkedin.com" 
    className="text-muted-foreground hover:text-foreground transition-color"
    aria-label="LinkedIn"
    style={{ color: '#298bf4ff !important' }} >...
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:alex@example.com" 
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>

          <button
            onClick={scrollToAbout}
            className="text-muted-foreground hover:text-foreground transition-all duration-300 animate-bounce"
            aria-label="Scroll to about section"
          >
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}