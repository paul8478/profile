import React, { useEffect, useState } from "react";
import "../css/skills.css";
import { getSubjects } from "../api/subjectApi"; // <-- your API function

export function TechStack() {
  const aboutText =
    "Here is a little bit about what technologies that I am currently using:";

  const [technologies, setTechnologies] = useState([]);

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getSubjects();
        // Assuming API returns: [{ id, name, imglink }]
        setTechnologies(data);
      } catch (error) {
        console.error("Error fetching subjects:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <section className="py-20 skill-card">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-gray-300 text-lg mb-8">{aboutText}</p>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
          {technologies.map((tech, index) => (
            <div
              key={tech.id || index}
              className="
                bg-white rounded-2xl p-4 flex items-center justify-center 
                hover:scale-105 transition-all duration-300 cursor-pointer
                shadow-lg
              "
            >
              <img
                src={tech.link}  // coming from API
                alt={tech.subject}
                className="w-20 h-20 object-contain"
              />
            </div>
          ))}
        </div>

        {/* GitHub Button */}
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full px-6 py-3 hover:scale-105 transition-all duration-300"
        >
          <span className="text-white font-medium">Check out my GitHub</span>
          <span className="text-white">→</span>
        </a>
      </div>

      {/* Scrolling Banner */}
      <div className="overflow-hidden bg-gradient-to-r from-purple-500 to-pink-500 py-4 mt-8">
        <div className="animate-scroll whitespace-nowrap text-white font-bold text-2xl md:text-4xl lg:text-6xl px-4 transform -rotate-2">
          EDUCATIONS • EXPERIENCE • KNOWLEDGE • UNIVERSITIES • SCHOOLS • ACADEMIC •
        </div>
      </div>
    </section>
  );
}
