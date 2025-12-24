export default function Blog() {
  const blogs = [
    {
      title: "Best Preschool in City - Quality Education Standards",
      excerpt:
        "Discover what makes a preschool exceptional. We focus on play-based learning, safety, experienced teachers, and holistic child development that prepares children for lifelong learning.",
      image: "/preschool-children-learning-activities.jpg",
    },
    {
      title: "Importance of STEM Education in Early Childhood",
      excerpt:
        "Learn why Science, Technology, Engineering, and Math education starting from early years develops critical thinking, problem-solving skills, and creativity in children.",
      image: "/stem-lab-children-learning-science.jpg",
    },
    {
      title: "How to Choose the Right School for Your Child",
      excerpt:
        "A comprehensive guide to evaluating schools based on curriculum, infrastructure, teacher quality, safety measures, extracurricular programs, and overall educational philosophy.",
      image: "/children-school-classroom-learning.jpg",
    },
    {
      title: "Holistic Development: Beyond Academic Excellence",
      excerpt:
        "Understand how modern education combines academics with sports, arts, values education, and life skills to create well-rounded individuals prepared for future challenges.",
      image: "/school-children-sports-activities.jpg",
    },
  ]

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Latest News & Insights</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Explore articles about education, child development, and school excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {blogs.map((blog, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden">
              <img src={blog.image || "/placeholder.svg"} alt={blog.title} className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{blog.title}</h3>
                <p className="text-gray-700 mb-4">{blog.excerpt}</p>
                <a
                  href="#"
                  className="text-blue-600 font-semibold hover:text-blue-700 transition inline-flex items-center gap-2"
                >
                  Read more <span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#"
            className="text-blue-600 font-bold text-lg hover:text-blue-700 transition inline-flex items-center gap-2"
          >
            View All Articles <span>→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
