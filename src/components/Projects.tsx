import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with payment integration, inventory management, and admin dashboard. Built with modern technologies for scalability and performance.",
      image: "https://images.unsplash.com/flagged/photo-1596559880461-bfbef645963f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlLWNvbW1lcmNlJTIwd2Vic2l0ZSUyMHNob3BwaW5nfGVufDF8fHx8MTc1ODI1NDI4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Data Analytics Dashboard",
      description: "Interactive dashboard for data visualization and analytics. Features real-time charts, filtering capabilities, and export functionality for business intelligence.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NTgxNzM0ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["Next.js", "TypeScript", "D3.js", "PostgreSQL", "Recharts"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Mobile App Development",
      description: "Cross-platform mobile application with native performance. Includes user authentication, real-time messaging, and offline capabilities.",
      image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzU4MTc5ODYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["React Native", "Firebase", "Redux", "Expo", "AsyncStorage"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Code Editor Platform",
      description: "Web-based code editor with syntax highlighting, collaborative editing, and project management. Built for developers to code anywhere, anytime.",
      image: "https://images.unsplash.com/photo-1649451844931-57e22fc82de3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZyUyMHNjcmVlbnxlbnwxfHx8fDE3NTgyNTQyODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["Vue.js", "Monaco Editor", "WebSocket", "Express", "Docker"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-8 text-center">Featured Projects</h2>
          <p className="text-lg text-muted-foreground mb-12 text-center max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-2">
                    <Button size="sm" asChild>
                      <a href={project.liveUrl} className="flex items-center gap-1">
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <a href={project.githubUrl} className="flex items-center gap-1">
                        <Github size={16} />
                        Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}