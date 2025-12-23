import React, { useState } from 'react';
import "../css/education.css";

import { GraduationCap, BookOpen, Award, Calendar } from 'lucide-react';

export function Education() {

  const [educationData] = useState([
    {
      id: 1,
      degree: "High School (10th)",
      institute: "Your School Name",
      year: "2016 - 2017",
      description: "Completed 10th standard with strong academic performance.",
      image: "https://cdn-icons-png.flaticon.com/512/174/174857.png"
    },
    {
      id: 2,
      degree: "Diploma in Computer Science",
      institute: "Your Diploma College Name",
      year: "2017 - 2020",
      description: "Learned core CS and engineering fundamentals.",
      image: "/education/diploma.png"
    },
    {
      id: 3,
      degree: "B.Tech in AIML",
      institute: "Your BTech College Name",
      year: "2021 - 2025",
      description: "Pursuing AIML with hands-on projects & research.",
      image: "/education/btech.png"
    }
  ]);

  const getIcon = (degree) => {
    if (degree.toLowerCase().includes("b.tech")) return <GraduationCap className="w-6 h-6" />;
    if (degree.toLowerCase().includes("diploma")) return <BookOpen className="w-6 h-6" />;
    if (degree.toLowerCase().includes("high school")) return <Award className="w-6 h-6" />;
    return <GraduationCap className="w-6 h-6" />;
  };

  const getColor = (degree) => {
    if (degree.toLowerCase().includes("b.tech")) return "bg-blue-500";
    if (degree.toLowerCase().includes("diploma")) return "bg-green-500";
    if (degree.toLowerCase().includes("high school")) return "bg-purple-500";
    return "bg-gray-500";
  };

  return (
    <div className='education-bg'>
      <div className="max-w-4xl mx-auto p-6 bg-gray-50 min-h-screen">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Education Timeline</h1>
          <p className="text-lg text-gray-600">My academic journey and achievements</p>
        </div>

        <div className="relative" style={{ minHeight: '800px' }}>
          
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-400 top-0 h-full"></div>

          {educationData.map((item, index) => (
            <div key={item.id} className="relative mb-16 last:mb-0">

              {/* Dot */}
              <div className={`absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 ${getColor(item.degree)} rounded-full flex items-center justify-center text-white shadow-lg z-20 top-20`}>
                {getIcon(item.degree)}
              </div>

              {/* IMAGE + CARD container */}
              <div className={`flex items-start gap-6 ${index % 2 === 0 ? 'justify-end pr-16' : 'justify-start pl-16'}`}>

                {/* IMAGE BLOCK */}
                <div className="w-28 h-28 rounded-lg overflow-hidden shadow-md bg-white">
                  <img 
                    src={item.image} 
                    alt={item.institute} 
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* CARD */}
                <div className="w-5/12">
                  <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border-l-4"
                    style={{
                      borderLeftColor:
                        getColor(item.degree) === "bg-blue-500" ? "#3B82F6" :
                        getColor(item.degree) === "bg-green-500" ? "#10B981" :
                        "#8B5CF6"
                    }}
                  >

                    <div className="flex items-center gap-2 mb-3">
                      <Calendar className="w-4 h-4 text-gray-500" />
                      <span className="text-sm font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                        {item.year}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-800 mb-2">{item.degree}</h3>
                    <h4 className="text-lg font-semibold text-gray-700 mb-1">{item.institute}</h4>

                    {item.description && (
                      <p className="text-gray-600 mb-4 leading-relaxed">{item.description}</p>
                    )}

                  </div>
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}
