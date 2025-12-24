export default function Gallery() {
  const galleryImages = [
    {
      title: "Gallery Image 1",
      image: "/abs/1000228774.jpg",
    },
    {
      title: "Gallery Image 2",
      image: "/abs/1000228801.jpg",
    },
    {
      title: "Gallery Image 3",
      image: "/abs/1000228806.jpg",
    },
    {
      title: "Gallery Image 4",
      image: "/abs/1000228809.jpg",
    },
    {
      title: "Gallery Image 5",
      image: "/abs/1000228831.jpg",
    },
    {
      title: "Gallery Image 6",
      image: "/abs/1000228837.jpg",
    },
    {
      title: "Gallery Image 7",
      image: "/abs/1000228853.jpg",
    },
    {
      title: "Gallery Image 8",
      image: "/abs/1000228858.jpg",
    },
    {
      title: "Gallery Image 9",
      image: "/abs/1000228908 (1).jpg",
    },
    {
      title: "Gallery Image 10",
      image: "/abs/1000228908.jpg",
    },
    {
      title: "Gallery Image 11",
      image: "/abs/1000228928.jpg",
    },
    {
      title: "Gallery Image 12",
      image: "/abs/1000228998.jpg",
    },
    {
      title: "Gallery Image 13",
      image: "/abs/IMG_20241001_122645.jpg",
    },
    {
      title: "Gallery Image 14",
      image: "/abs/IMG_20241001_152907 (1).jpg",
    },
    {
      title: "Gallery Image 15",
      image: "/abs/IMG_20241126_120738.jpg",
    },
    {
      title: "Gallery Image 16",
      image: "/abs/IMG_20241217_123322.jpg",
    },
    {
      title: "Gallery Image 17",
      image: "/abs/IMG_20241217_141444.jpg",
    },
    {
      title: "Gallery Image 18",
      image: "/abs/IMG_20241217_142010.jpg",
    },
    {
      title: "Gallery Image 19",
      image: "/abs/IMG_20241223_122447.jpg",
    },
    {
      title: "Gallery Image 20",
      image: "/abs/IMG_20250108_142537.jpg",
    },
    {
      title: "Gallery Image 21",
      image: "/abs/IMG_20250108_143357.jpg",
    },
    {
      title: "Gallery Image 22",
      image: "/abs/IMG_20250108_150529.jpg",
    },
    {
      title: "Gallery Image 23",
      image: "/abs/IMG_20250203_132012.jpg",
    },
    {
      title: "Gallery Image 24",
      image: "/abs/IMG_20250203_151212.jpg",
    },
    {
      title: "Gallery Image 25",
      image: "/abs/IMG_20250221_114414.jpg",
    },
    {
      title: "Gallery Image 26",
      image: "/abs/IMG_20250305_152806.jpg",
    },
    {
      title: "Gallery Image 27",
      image: "/abs/IMG_20250305_154517.jpg",
      featured: true,
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Gallery</h2>
          <p className="text-lg text-gray-700">Glimpses of life and learning at AEON Public School</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {galleryImages.map((item, idx) => (
            <div
              key={idx}
              className="group overflow-hidden rounded-xl shadow-md hover:shadow-xl transition cursor-pointer"
            >
              <div className="relative overflow-hidden bg-gray-200 aspect-square">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition flex items-end">
                  <div className="w-full p-4 bg-gradient-to-t from-black/60 to-transparent text-white opacity-0 group-hover:opacity-100 transition">
                    <p className="font-semibold">{item.title}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
