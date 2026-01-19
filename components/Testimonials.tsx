
import React from 'react';

const TESTIMONIALS = [
  {
    name: "Alex Johnson",
    role: "Computer Science Student",
    content: "Lumina AI literally saved my GPA. The way it explains algorithms is better than any textbook I've ever used. It's like having a PhD tutor available at 3 AM.",
    avatar: "https://picsum.photos/id/64/100/100"
  },
  {
    name: "Maria Garcia",
    role: "High School Junior",
    content: "I used to hate math, but the personalized path Lumina created for me actually made it fun. I just got my first 'A' on a calculus mid-term!",
    avatar: "https://picsum.photos/id/65/100/100"
  },
  {
    name: "David Chen",
    role: "Medical Student",
    content: "The amount of information in med school is overwhelming. Lumina helps me condense complex biological systems into easy-to-digest concepts.",
    avatar: "https://picsum.photos/id/66/100/100"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Trusted by 50,000+ Students</h2>
          <p className="text-slate-600 text-lg">See what our community has to say about their learning journey.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 relative group">
              <div className="flex items-center space-x-4 mb-6">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border-2 border-blue-100" />
                <div>
                  <h4 className="font-bold text-slate-900">{t.name}</h4>
                  <p className="text-sm text-slate-500">{t.role}</p>
                </div>
              </div>
              <p className="text-slate-600 italic leading-relaxed">
                "{t.content}"
              </p>
              <div className="absolute top-8 right-8 text-blue-100 opacity-50 group-hover:text-blue-200 transition-colors">
                <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                  <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V12C14.017 12.5523 13.5693 13 13.017 13H11.017V21H14.017ZM5.017 21L5.017 18C5.017 16.8954 5.91243 16 7.017 16H10.017C10.5693 16 11.017 15.5523 11.017 15V9C11.017 8.44772 10.5693 8 10.017 8H6.017C5.46472 8 5.017 8.44772 5.017 9V12C5.017 12.5523 4.56928 13 4.017 13H2.017V21H5.017Z" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
