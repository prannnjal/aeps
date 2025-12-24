export default function Testimonials() {
  const testimonials = [
    {
      name: "Vikak Yadav",
      content:
        "The school is an excellent endeavour. It is well planned and they have a good balance between academics and extra curricular activities. The teachers are well trained and extremely approachable. A little far from my home but still manageable.",
      initials: "VY",
    },
    {
      name: "Vishal Ranjan Sahai",
      content:
        "It has been a wonderful day with kids performing the cultures of different states of India. My son represented India beautifully. Overall it was a great experience with outstanding event management!",
      initials: "VR",
    },
    {
      name: "Rachna Srivastav",
      content:
        "Birla OpenMinds provides a good learning environment by including various activities into their curriculum. The focus on giving values contributes to a positive educational atmosphere. The well-designed infrastructure is commendable!",
      initials: "RS",
    },
    {
      name: "Niharika Awasthi",
      content:
        "The school is designed to ensure an engaging, appealing and child-friendly setting. The infrastructure is in sync with different learning modalities. They preserve traditional values while taking an international-minded approach.",
      initials: "NA",
    },
    {
      name: "Shatrughan Singh",
      content:
        "Great experience! The school creates a child-friendly setting with infrastructure that supports different learning modalities and curriculum. They maintain traditional Indian values while fostering an international perspective.",
      initials: "SS",
    },
    {
      name: "Divyansh Sharma",
      content:
        "Outstanding commitment to academic excellence and holistic growth. The dedicated faculty foster a nurturing environment. The well-rounded curriculum coupled with modern facilities ensures quality education.",
      initials: "DS",
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">What Parents Say</h2>
          <p className="text-lg text-gray-700">Hear from families who trust us with their children's future</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition border-t-4 border-blue-600"
            >
              <p className="text-gray-700 mb-6 italic leading-relaxed">"{testimonial.content}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center text-white font-bold">
                  {testimonial.initials}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">Parent</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
