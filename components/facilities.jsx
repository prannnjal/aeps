export default function Facilities() {
  const facilities = [
    {
      title: "🏠 Cozy Classrooms",
      description: "Warm, safe spaces designed like a home away from home",
      color: "from-orange-300 to-red-300",
    },
    {
      title: "🔒 Security First",
      description: "24/7 CCTV & trained security for your child's safety",
      color: "from-blue-300 to-cyan-300",
    },
    {
      title: "👨‍🏫 Expert Teachers",
      description: "Certified & trained educators passionate about kids",
      color: "from-pink-300 to-rose-300",
    },
    {
      title: "🎮 Play & Learn",
      description: "Interactive, fun learning through games & activities",
      color: "from-green-300 to-emerald-300",
    },
    {
      title: "🚌 Safe Transport",
      description: "GPS-enabled buses with trained attendants",
      color: "from-yellow-300 to-amber-300",
    },
    {
      title: "🍎 Healthy Meals",
      description: "Nutritious, hygienic meals for growing kids",
      color: "from-purple-300 to-violet-300",
    },
    {
      title: "💪 Active Play",
      description: "Sports grounds & playgrounds for physical development",
      color: "from-red-300 to-pink-300",
    },
    {
      title: "⚕️ Health Care",
      description: "Regular check-ups & trained first aid staff",
      color: "from-teal-300 to-cyan-300",
    },
  ]

  return (
    <section id="facilities" className="py-20 bg-gradient-to-b from-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 bg-clip-text text-transparent mb-4">
            Our Amazing Facilities
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto font-semibold">
            Everything your child needs for a happy, safe & enriching school experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((facility, idx) => (
            <div
              key={idx}
              className={`bg-gradient-to-br ${facility.color} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer group`}
            >
              <div className="text-5xl mb-4 group-hover:rotate-12 transition-transform duration-300">
                {facility.title.split(" ")[0]}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{facility.title.split(" ").slice(1).join(" ")}</h3>
              <p className="text-gray-800 font-semibold">{facility.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
