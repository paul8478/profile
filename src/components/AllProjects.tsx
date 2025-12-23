import { Card } from "./ui/card";
import { Button } from "./ui/button";
import "../css/project.css";

export function AllProjects() {
  const projects = [
    {
      title: "DeepSite",
      description: "The new AI Web Coding Platform Utilizing Language Learning, applications to teach programming to beginners.",
      tags: ["AI", "Web Development", "Education"],
      gradient: "from-blue-600 to-blue-800",
      image: "https://images.rooter.gg/rooter-broadcast-images/incoming/prod-thumbnails-2009997776-1694501656325.jpg"
    },
    {
      title: "DiscordTools.xyz",
      description: "A comprehensive set of tools for Discord server management and enhancement.",
      tags: ["Discord", "Tools", "Management"],
      gradient: "from-purple-600 to-purple-800",
      image: "https://images.rooter.gg/rooter-broadcast-images/incoming/prod-thumbnails-2009997776-1694501656325.jpg"
    },
    {
      title: "DeepSite",
      description: "The new AI Web Coding Platform Utilizing Language Learning, applications to teach programming to beginners.",
      tags: ["AI", "Web Development", "Education"],
      gradient: "from-blue-600 to-blue-800",
      image: "https://images.rooter.gg/rooter-broadcast-images/incoming/prod-thumbnails-2009997776-1694501656325.jpg"
    },
    {
      title: "DiscordTools.xyz",
      description: "A comprehensive set of tools for Discord server management and enhancement.",
      tags: ["Discord", "Tools", "Management"],
      gradient: "from-purple-600 to-purple-800",
      image: "https://images.rooter.gg/rooter-broadcast-images/incoming/prod-thumbnails-2009997776-1694501656325.jpg"
    },
    {
      title: "DeepSite",
      description: "The new AI Web Coding Platform Utilizing Language Learning, applications to teach programming to beginners.",
      tags: ["AI", "Web Development", "Education"],
      gradient: "from-blue-600 to-blue-800",
      image: "https://images.rooter.gg/rooter-broadcast-images/incoming/prod-thumbnails-2009997776-1694501656325.jpg"
    },
    {
      title: "DiscordTools.xyz",
      description: "A comprehensive set of tools for Discord server management and enhancement.",
      tags: ["Discord", "Tools", "Management"],
      gradient: "from-purple-600 to-purple-800",
            image: "https://images.rooter.gg/rooter-broadcast-images/incoming/prod-thumbnails-2009997776-1694501656325.jpg"

    },
  ];

  return (
    <section className="py-20 px-6 project-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-gray-400 text-sm uppercase tracking-wider mb-4">PERSONAL PROJECTS</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            All projects I've worked on
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className={`
                bg-white/20 ${project.gradient}
                border-none text-white overflow-hidden
                hover:scale-105 transition-all duration-300 cursor-pointer
                p-6
              `}
            >
              <div className="mb-4">
                <div className="w-auto h-auto bg-white/20 rounded-lg mb-2 flex items-center justify-center overflow-hidden">
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="object-contain w-70 h-70"
                    />
                  ) : (
                    <div className="w-70 h-70 flex items-center justify-center text-white/80">
                      No Image
                    </div>
                  )}
                </div>
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-white/80 leading-relaxed mb-0">
                  {project.description}
                </p>
              </div>
              
              <Button 
                variant="outline" 
                className="bg-white/10 mt-0 border-white/30 text-white hover:bg-white/10"
              >
                View Project
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}