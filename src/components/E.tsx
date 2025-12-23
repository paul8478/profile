import React from "react";
import "../css/experience.css";
import { GraduationCap, BookOpen, Award, Calendar } from "lucide-react";

export function Education() {
  const educationData = [
    {
      id: 1,
      title: "Master of Science in Computer Science",
      institution: "Stanford University",
      location: "California, USA",
      duration: "2020 - 2022",
      description:
        "Specialized in Machine Learning and Artificial Intelligence. Completed thesis on Deep Learning applications in NLP.",
      icon: <GraduationCap className="w-8 h-8" />,
      color: "bg-blue-500",
    },
    {
      id: 2,
      title: "Bachelor of Science in Software Engineering",
      institution: "University of California, Berkeley",
      location: "California, USA",
      duration: "2016 - 2020",
      description:
        "Focused on software development, algorithms, and system design. Active in hackathons and open-source projects.",
      icon: <BookOpen className="w-8 h-8" />,
      color: "bg-green-500",
    },
    {
      id: 3,
      title: "High School Diploma",
      institution: "Lincoln High School",
      location: "San Francisco, USA",
      duration: "2012 - 2016",
      description:
        "Concentrated on STEM subjects with AP courses in Mathematics, Physics, and Computer Science.",
      icon: <Award className="w-8 h-8" />,
      color: "bg-purple-500",
    },
    {
      id: 4,
      title: "Professional Certification",
      institution: "Coursera & edX",
      location: "Online",
      duration: "2023",
      description:
        "Earned certifications in Data Science, Deep Learning, and Cloud Computing.",
      icon: <GraduationCap className="w-8 h-8" />,
      color: "bg-orange-500",
    },
  ];

  return (
    <div className="education-bg">
      <div className="max-w-6xl mx-auto p-6 bg-gray-50 min-h-screen">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            My Education
          </h1>
          <p className="text-lg text-gray-600">
            Academic milestones and certifications
          </p>
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 border-t-4"
              style={{
                borderTopColor:
                  item.color === "bg-blue-500"
                    ? "#3B82F6"
                    : item.color === "bg-green-500"
                    ? "#10B981"
                    : item.color === "bg-purple-500"
                    ? "#8B5CF6"
                    : "#F97316",
              }}
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 ${item.color} text-white rounded-full flex items-center justify-center mb-4`}
              >
                {item.icon}
              </div>

              {/* Duration */}
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="w-4 h-4 text-gray-500" />
                <span className="text-sm font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                  {item.duration}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-800 mb-1">
                {item.title}
              </h3>
              <h4 className="text-lg font-semibold text-gray-700">
                {item.institution}
              </h4>
              <p className="text-sm text-gray-500 mb-3">{item.location}</p>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
