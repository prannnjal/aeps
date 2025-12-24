"use client"

import { useState, useEffect } from "react"
import { ChevronDown } from "lucide-react"

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "Welcome to AEON School",
      subtitle: "Where Learning Becomes an Adventure! 🎨✨",
      cta: "Explore Now",
      gradient: "from-orange-400 via-pink-400 to-red-400",
    },
    {
      title: "Play, Learn & Grow Together",
      subtitle: "Creating memories and building futures",
      cta: "Book a Visit",
      gradient: "from-purple-400 via-pink-400 to-blue-400",
    },
    {
      title: "World-Class Fun & Learning",
      subtitle: "Quality education with endless possibilities",
      cta: "See Our Programs",
      gradient: "from-green-400 via-teal-400 to-blue-400",
    },
    {
      title: "Your Child's Best Day Starts Here",
      subtitle: "Safe, happy, and full of learning",
      cta: "Join Us!",
      gradient: "from-yellow-400 via-orange-400 to-pink-400",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="pt-20 min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/abs/IMG_20241001_122645.jpg')"
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="relative w-full h-full min-h-screen flex items-center justify-center">
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 flex items-center justify-center ${
              idx === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className="absolute top-12 left-8 w-32 h-20 bg-white rounded-full opacity-70 animate-float-left"
              style={{
                boxShadow: "-20px 0 0 -5px white, 20px 0 0 -5px white, -40px 0 0 -10px white",
              }}
            ></div>

            <div
              className="absolute top-1/4 right-12 w-40 h-24 bg-white rounded-full opacity-60 animate-float-right"
              style={{
                boxShadow: "-25px 0 0 -8px white, 25px 0 0 -8px white, -50px 0 0 -12px white",
              }}
            ></div>

            <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-white rounded-full opacity-50 animate-bounce-slow"></div>
            <div className="absolute bottom-24 right-1/3 w-16 h-16 bg-white rounded-full opacity-40 animate-wobble"></div>
            <div className="absolute top-1/3 left-1/3 w-12 h-12 bg-yellow-200 rounded-full opacity-60 animate-pulse-glow"></div>

            <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-balance drop-shadow-lg">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl mb-10 font-semibold opacity-95 drop-shadow-md text-balance">
                {slide.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer with button, indicators, and scroll */}
      <div className="absolute bottom-0 left-0 right-0 pb-8 z-10">
        <div className="flex flex-col items-center gap-4">
          {/* CTA Button */}
          <div className="transition-opacity duration-500">
            <a
              href="#contact"
              className="inline-block bg-pink-500 text-white px-10 py-4 rounded-full hover:scale-110 transition-transform font-bold text-lg shadow-xl hover:shadow-2xl"
            >
              {slides[currentSlide].cta}
            </a>
          </div>
          
          {/* Slide indicators */}
          <div className="flex gap-3">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`transition-all duration-300 rounded-full hover:scale-125 ${
                  idx === currentSlide ? "bg-white w-12 h-4 shadow-lg" : "bg-white/40 w-3 h-3 hover:bg-white/60"
                }`}
              />
            ))}
          </div>

          {/* Scroll indicator */}
          <div className="animate-bounce">
            <ChevronDown className="text-white" size={32} />
          </div>
        </div>
      </div>
    </section>
  )
}
