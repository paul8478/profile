import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import "../css/home.css";
import somnath from "../images/somnath.jpg";
import github from "../images/github.png";


export function ProjectsGrid() {
  const projects = [
    {
      title: "Social Media",
      gradient: "from-pink-500 to-purple-600",
      size: "md",
      type: "social"
    },
    {
      title: "Somnath Paul",
      description: "An Enthusiastic & Passionate Developer",
      image: "/api/placeholder/300/200",
      gradient: "from-purple-500 to-blue-500",
      size: "lg"
    },
    {
      title: "Details",
      gradient: "from-pink-500 to-purple-600",
      size: "md",
      type: "details"
    },
    {
      title: "Youtube", 
      gradient: "from-red-400 to-red-500",
      size: "md",
      type: "youtube"
    },
    {
      title: "", 
      gradient: "from-blue-400 to-cyan-400",
      size: "md",
      type: "github"
    }
  ];

  return (
    <section className="py-20 px-6 home-bg">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-max">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className={`
                bg-gradient-to-br ${project.gradient} 
                border-none text-white overflow-hidden
                hover:scale-105 transition-all duration-300 cursor-pointer
                ${project.size === 'lg' ? 'md:col-span-2 md:row-span-2' : ''}
                ${project.size === 'md' ? 'aspect-square' : ''}
                ${project.size === 'sm' ? 'md:col-span-2 aspect-[2/1]' : ''}
              `}
            >
              <div className="p-6 h-full flex flex-col justify-between">

                {/* YouTube card */}
                {project.type === "youtube" && (
                  <div className="flex items-center justify-center flex-1">
                    <img 
                      src="https://yt3.googleusercontent.com/goYPVOiLvw_fjsdx8-8qi9yG6uxyrCmisx2HB_lsvpopM-58Lrz7U-IOOXzJLhOyNaw_0hJ7Jg=s160-c-k-c0x00ffffff-no-rj" 
                      alt="YouTube Logo" 
                      className="w-20 h-20 rounded-full"
                    />
                  </div>
                )}

                {/* GitHub card */}
                {project.type === "github" && (
                  <div className="flex items-center justify-center flex-1">
                    <img 
                      src={github} 
                      className="w-10 h-20"
                    />
                  </div>
                )}

                {/* Social Media card */}
                {project.type === "social" && (
                  <div className="grid grid-cols-2 gap-4 flex-1 items-center justify-center px-8">
                    <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" className="w-12 h-12 mx-auto color-white" />
                    <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" className="w-12 h-12 mx-auto" />
                    <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" className="w-12 h-12 mx-auto" />
                    <img src="https://cdn-icons-png.flaticon.com/512/733/733553.png" alt="GitHub" className="w-12 h-12 mx-auto" />
                  </div>
                )}

                {/* Details card */}
                {project.type === "details" && (
                  <div className="space-y-2 text-sm text-white/90">
                    <p><strong>Mail:</strong> spaulxofficial@gmail.com</p>
                    <p><strong>Mail:</strong> somnathpaul626@gmail.com</p>
                    <p><strong>Country:</strong> India</p>
                    <p><strong>State:</strong> West Bengal</p>
                    <p><strong>City:</strong> Kolkata</p>
                    <p><strong>Language:</strong> Bengali, English, Hindi</p>
                    <p><strong>Interests:</strong> web development, AI & ML</p>
                  </div>
                )}

                {/* Replace emoji with somnath image */}
                {project.image && project.title === "Somnath Paul" && (
                  <div className="flex-1 bg-black/20 rounded-lg mb-4 flex items-center justify-center">
                    <img 
                      src={somnath} 
                      alt="Somnath Paul" 
                      className="w-40 h-40 object-cover"
                    />
                  </div>
                )}

                {/* Original image fallback */}
                {project.image && project.title !== "Somnath Paul" && (
                  <div className="flex-1 bg-black/20 rounded-lg mb-4 flex items-center justify-center">
                    <div className="text-6xl">🤖</div>
                  </div>
                )}

                <div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  {project.description && (
                    <p className="text-white/80 text-sm">{project.description}</p>
                  )}
                </div>

              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
