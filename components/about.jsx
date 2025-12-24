"use client"

export default function About() {
  const features = [
    {
      title: "🎨 Creative Learning",
      description: "Art, music, dance & creative expression through playful activities",
      color: "from-pink-400 to-orange-400",
    },
    {
      title: "🧬 STEM Excellence",
      description: "Hands-on science, tech, engineering & math through interactive projects",
      color: "from-blue-400 to-purple-400",
    },
    {
      title: "⚽ Sports & Fitness",
      description: "Football, basketball, swimming, yoga & athletic development programs",
      color: "from-green-400 to-teal-400",
    },
    {
      title: "📖 Smart Learning",
      description: "Interactive classrooms with smart boards & tech-enabled education",
      color: "from-yellow-400 to-orange-400",
    },
    {
      title: "🌍 Global Values",
      description: "Character building, cultural awareness & environmental sustainability",
      color: "from-purple-400 to-pink-400",
    },
    {
      title: "🎯 Life Skills",
      description: "Critical thinking, teamwork, communication & leadership development",
      color: "from-cyan-400 to-blue-400",
    },
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white relative overflow-hidden" style={{ background: 'linear-gradient(to bottom, white, rgba(56, 189, 248, 0.1))' }}>
      <div
        className="absolute top-20 left-10 w-40 h-24 rounded-full opacity-30 animate-float-left"
        style={{
          backgroundColor: 'rgb(56, 189, 248)',
          boxShadow: "-30px 0 0 -8px rgb(56, 189, 248), 30px 0 0 -8px rgb(56, 189, 248)",
        }}
      ></div>

      <div
        className="absolute bottom-40 right-10 w-48 h-28 bg-pink-100 rounded-full opacity-25 animate-float-right"
        style={{
          boxShadow: "-35px 0 0 -10px rgb(252, 231, 243), 35px 0 0 -10px rgb(252, 231, 243)",
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent mb-4" style={{ background: 'linear-gradient(to right, rgb(220, 154, 37), rgb(236, 72, 153), rgb(56, 189, 248))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Why Choose AEON School?
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto font-semibold">
            We make learning fun, safe, and enriching for every child
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Your Child's Future Starts Here</h2>
            <p className="text-gray-700 text-lg mb-4 leading-relaxed">
              AEON Public School is a premier educational institution dedicated to providing exceptional learning
              experiences for children aged 3 months to 10 years. We believe in nurturing young minds with a perfect
              blend of academics, sports, arts, and life skills.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Our commitment is to make learning extraordinary through innovative teaching methods, experienced
              educators, safe infrastructure, and a child-centric approach that values every child's individual growth
              and development.
            </p>
          </div>
          <div className="rounded-2xl p-8 shadow-lg" style={{ background: 'linear-gradient(to bottom right, rgba(56, 189, 248, 0.2), rgba(56, 189, 248, 0.1))' }}>
            <img src="/abs/IMG_20250305_154517.jpg" alt="School Campus" className="rounded-xl w-full h-auto" />
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`bg-gradient-to-br ${feature.color} rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-white cursor-pointer group relative overflow-hidden`}
            >
              <div className="absolute -top-10 -right-10 w-32 h-20 bg-white/20 rounded-full blur-md"></div>

              <div className="relative z-10">
                <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-300 inline-block">
                  {feature.title.split(" ")[0]}
                </div>
                <h3 className="text-2xl font-bold mb-3">{feature.title.split(" ").slice(1).join(" ")}</h3>
                <p className="text-white/90 font-semibold leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
