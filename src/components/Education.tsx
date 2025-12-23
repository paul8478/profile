import React, { useState } from 'react';
import "../css/education.css";

import { GraduationCap, BookOpen, Award, Calendar } from 'lucide-react';

export function Education() {

  const [educationData] = useState([
    {
      id: 1,
      degree: "Madhyamik Examination (10th)",
      institute: "Heritage Academy High School",
      year: "2016 - 2017",
      description: "Completed 10th standard with strong academic performance.",
      image: "https://ik.imagekit.io/psspsjqbj/heritage.png"
    },
    {
      id: 2,
      degree: "Diploma in Computer Science & Engineering",
      institute: "Brainware University",
      year: "2017 - 2020",
      description: "Learned core CS and engineering fundamentals.",
      image: "https://www.guidemeeducation.in/wp-content/uploads/Brainware-university-M.tech_.jpg"
    },
    {
      id: 3,
      degree: "B.Tech in Computer Science with Specialization in AIML",
      institute: "MCKV Institute of Engineering",
      year: "2021 - 2025",
      description: "Pursuing Cse with specialization in AIML with hands-on projects & research.",
      image: "data:image/png;base64,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"
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

              

              {/* IMAGE + CARD container */}
              <div className={`flex items-start gap-6 ${index % 2 === 0 ? 'justify-end pr-16' : 'justify-start pl-16'}`}>

                {/* IMAGE BLOCK */}
                <div className="w-20 h-20 rounded-lg overflow-hidden shadow-md bg-white">
                  <img 
                    src={item.image} 
                    alt={item.institute} 
                    className="w-width h-height object-cover"
                  />
                </div>

                {/* CARD */}
                <div className="w-5/12">
                  <div className="bg-white rounded-lg shadow-lg p-3 hover:shadow-xl transition-shadow duration-300 border-l-4"
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
