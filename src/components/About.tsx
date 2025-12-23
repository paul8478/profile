import { Card, CardContent } from "./ui/card";
import { Code, Palette, Zap } from "lucide-react";

export function About() {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and well-documented code that stands the test of time."
    },
    {
      icon: Palette,
      title: "UI/UX Focus",
      description: "Creating intuitive and beautiful user interfaces that provide exceptional user experiences."
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Building fast, optimized applications that deliver excellent performance across all devices."
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-8 text-center">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-lg text-muted-foreground mb-6">
                I'm a passionate full-stack developer with over 5 years of experience building 
                web applications. I love turning complex problems into simple, beautiful, and 
                intuitive solutions.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                When I'm not coding, you can find me exploring new technologies, contributing to 
                open source projects, or sharing my knowledge through blog posts and mentoring.
              </p>
              <p className="text-lg text-muted-foreground">
                I believe in continuous learning and staying up-to-date with the latest trends 
                and best practices in web development.
              </p>
            </div>
            
            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <div className="w-64 h-64 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-primary-foreground text-6xl">
                  AC
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <highlight.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl mb-2">{highlight.title}</h3>
                  <p className="text-muted-foreground">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}