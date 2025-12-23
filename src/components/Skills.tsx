import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        "React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", 
        "Tailwind CSS", "Sass", "Vue.js", "Angular"
      ]
    },
    {
      title: "Backend",
      skills: [
        "Node.js", "Express", "Python", "Django", "FastAPI", "PostgreSQL", 
        "MongoDB", "Redis", "GraphQL", "REST APIs"
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        "Git", "Docker", "AWS", "Vercel", "Figma", "VS Code", 
        "Jest", "Cypress", "Webpack", "Vite"
      ]
    },
    {
      title: "Soft Skills",
      skills: [
        "Problem Solving", "Team Leadership", "Communication", "Agile/Scrum", 
        "Code Review", "Mentoring", "Project Management", "UI/UX Design"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 ">
        <div className="max-w-6xl mx-auto">
          <p className="text-lg text-muted-foreground mb-12 text-center max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-sm">
                        {skill}
                      </Badge>
                    ))}
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