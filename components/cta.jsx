export default function CTA() {
  return (
    <section className="py-20 text-white" style={{ backgroundColor: 'rgb(56, 189, 248)' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Admission Open 2025-2026</h2>
        <p className="text-xl md:text-2xl mb-4 opacity-90">Making Learning Extraordinary</p>
        <p className="text-lg mb-8 opacity-80 max-w-2xl mx-auto">
          Give your child the gift of quality education in a nurturing environment designed for growth, creativity, and
          excellence.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="bg-pink-500 text-white px-10 py-4 rounded-lg hover:bg-pink-600 transition font-bold text-lg shadow-lg"
          >
            Book a Visit
          </a>
          <a
            href="#contact"
            className="border-2 border-white text-white px-10 py-4 rounded-lg hover:bg-white/10 transition font-bold text-lg"
          >
            Join Waitlist
          </a>
        </div>
      </div>
    </section>
  )
}
