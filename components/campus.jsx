export default function Campus() {
  return (
    <section id="campus" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Visit Our Campus</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Explore our state-of-the-art facilities, modern classrooms, sports grounds, and learning spaces designed to
            inspire and nurture young minds.
          </p>
        </div>

        <div className="mb-12">
          <div className="aspect-video bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/_E7m3pGmYNY"
              title="AEON Public School Campus Tour"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-xl p-8 shadow-md border-l-4 border-pink-500">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Modern Infrastructure</h3>
            <p className="text-gray-700">
              Purpose-built campus with air-conditioned classrooms, smart boards, science labs, computer labs, and
              library facilities.
            </p>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-md border-l-4 border-pink-500">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Sports & Recreation</h3>
            <p className="text-gray-700">
              Dedicated sports grounds, play areas, indoor games facility, swimming pool, and equipment for various
              sports activities.
            </p>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-md border-l-4 border-pink-500">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Safe & Secure</h3>
            <p className="text-gray-700">
              24/7 CCTV surveillance, trained security staff, medical facility, well-trained staff, and strict safety
              protocols.
            </p>
          </div>
        </div>

        <div className="text-center">
          <a
            href="#contact"
            className="inline-block bg-pink-500 text-white px-10 py-4 rounded-lg hover:bg-pink-600 transition font-bold text-lg shadow-lg"
          >
            Schedule Campus Tour
          </a>
        </div>
      </div>
    </section>
  )
}
