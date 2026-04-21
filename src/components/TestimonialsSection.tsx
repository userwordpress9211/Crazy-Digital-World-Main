import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "CEO, TechFlow Solutions",
    content: "Crazy Digital World transformed our online presence. Their IT consulting helped us scale our operations by 40% in just six months. Highly professional team!",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=rajesh"
  },
  {
    name: "Sarah Jenkins",
    role: "Founder, E-Shop Global",
    content: "The e-commerce listing services provided by them are top-notch. Our sales on Amazon and Flipkart saw a significant jump. Their approach is truly data-driven.",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=sarah"
  },
  {
    name: "Amit Sharma",
    role: "Operations Manager, Logistics Pro",
    content: "Their workflow automation solutions saved us hundreds of manual hours every month. The ROI was evident within the first quarter. Best investment for our business.",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=amit"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-[#F8FBFD]">
      <div className="section-container">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 mb-4 text-sm font-bold tracking-wider text-[#1EA6DA] uppercase bg-[#EAF6FB] rounded-full">
            Testimonials
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-[#1F2933] mb-6">
            Honest Reviews from Clients
          </h2>
          <p className="text-lg text-[#4B5563] max-w-2xl mx-auto">
            Don't just take our word for it. Here's what business leaders have to say about 
            their experience with Crazy Digital World.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl border border-[#E3E8EE] shadow-sm relative hover:shadow-md transition-shadow"
            >
              <Quote className="absolute top-6 right-8 w-10 h-10 text-[#1EA6DA]/10" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#FBBF24] text-[#FBBF24]" />
                ))}
              </div>

              <p className="text-[#4B5563] italic mb-8 leading-relaxed relative z-10">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#EAF6FB]"
                />
                <div>
                  <h4 className="font-bold text-[#1F2933]">{testimonial.name}</h4>
                  <p className="text-sm text-[#6B7280]">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
