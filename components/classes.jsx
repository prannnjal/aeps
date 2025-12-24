"use client"

import { useState } from "react"

export default function Classes() {
  const [expandedClass, setExpandedClass] = useState(0)

  const classes = [
    {
      grade: "🎨 Pre-Primary",
      subtitle: "Nursery, LKG, UKG",
      ageGroup: "2.5 to 5.5 years",
      focus: "Play-based learning with colorful activities",
      color: "from-pink-400 to-orange-400",
      highlights: [
        "Child-centric play-based curriculum",
        "Montessori-inspired methods",
        "Art, music, dance & creative play",
        "Safe & nurturing environment",
        "Interactive smart learning",
      ],
    },
    {
      grade: "🚀 Grade 1",
      subtitle: "",
      ageGroup: "5.5 to 6.5 years",
      focus: "Structured learning with fun activities",
      color: "from-blue-400 to-purple-400",
      highlights: [
        "Interactive & engaging teaching",
        "Low student-teacher ratio",
        "Hands-on storytelling activities",
        "Emotional intelligence building",
        "Reading & math foundations",
      ],
    },
    {
      grade: "🌟 Grade 2-3",
      subtitle: "",
      ageGroup: "6.5 to 8.5 years",
      focus: "Critical thinking & project-based learning",
      color: "from-green-400 to-teal-400",
      highlights: [
        "STEAM integrated curriculum",
        "Creative inquiry-based learning",
        "Digital literacy introduction",
        "Group projects & collaboration",
        "Environmental awareness",
      ],
    },
    {
      grade: "🎯 Grade 4-6",
      subtitle: "",
      ageGroup: "8.5 to 11.5 years",
      focus: "Academic excellence & personality development",
      color: "from-yellow-400 to-orange-400",
      highlights: [
        "Concept-based real-world learning",
        "Leadership & communication skills",
        "Coding & robotics programs",
        "Field trips & guest lectures",
        "Career orientation",
      ],
    },
  ]

  return (
    <section id="classes" className="py-20 relative overflow-hidden" style={{ background: 'linear-gradient(to bottom, rgba(56, 189, 248, 0.1), rgba(56, 189, 248, 0.05))' }}>
      <div
        className="absolute top-40 left-5 w-36 h-22 bg-white rounded-full opacity-40 animate-float-left"
        style={{
          boxShadow: "-25px 0 0 -7px white, 25px 0 0 -7px white",
        }}
      ></div>

      <div
        className="absolute bottom-20 right-8 w-44 h-26 bg-white rounded-full opacity-35 animate-float-right"
        style={{
          boxShadow: "-30px 0 0 -8px white, 30px 0 0 -8px white",
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent mb-4" style={{ background: 'linear-gradient(to right, rgb(220, 154, 37), rgb(236, 72, 153), rgb(56, 189, 248))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Our Classes & Programs
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto font-semibold">
            Specially designed programs for every age group from toddlers to 6th grade
          </p>
        </div>

        <div className="space-y-6">
          {classes.map((classItem, idx) => (
            <div
              key={idx}
              onClick={() => setExpandedClass(expandedClass === idx ? -1 : idx)}
              className={`bg-gradient-to-r ${classItem.color} rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-102 relative group`}
            >
              <div className="absolute -top-8 -right-8 w-40 h-28 bg-white/15 rounded-full blur-lg group-hover:blur-xl transition-all"></div>

              <div className="p-6 md:p-8 text-white relative z-10">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-3xl font-bold mb-2">{classItem.grade}</h3>
                    <p className="text-white/90 mb-2 font-semibold">Age Group: {classItem.ageGroup}</p>
                    <p className="text-white/85 font-medium">{classItem.focus}</p>
                  </div>
                  <div className={`transition-transform text-3xl ${expandedClass === idx ? "rotate-180" : ""}`}>▼</div>
                </div>

                {expandedClass === idx && (
                  <div className="mt-6 pt-6 border-t border-white/30">
                    <h4 className="font-bold text-lg mb-4">What Makes Us Special:</h4>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {classItem.highlights.map((highlight, i) => (
                        <li key={i} className="flex gap-3">
                          <span className="text-2xl flex-shrink-0">✨</span>
                          <span className="font-semibold">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href="#contact"
                      className="inline-block mt-6 bg-white px-6 py-2 rounded-full font-bold hover:scale-110 transition-transform"
                      style={{ color: 'rgb(220, 154, 37)' }}
                    >
                      Enroll Now
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
