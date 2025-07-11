"use client";

import { useEffect, useState } from "react";
import { Quote, Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Mwangi",
      position: "CEO, TechFlow Kenya",
      company: "TechFlow Kenya",
      // image:
      //   // "https://images.unsplash.com/photo-1494790108755-2616b612c8c2?auto=format&fit=crop&w=150&h=150",
      rating: 5,
      text: "Harley Systems transformed our business operations with their SMS marketing solution. We saw a 300% increase in customer engagement within the first month.",
    },
    {
      name: "James Kiprotich",
      position: "Operations Manager, SafariFleet",
      company: "SafariFleet",
      // image:
      //   "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150",
      rating: 4,
      text: "The fleet management system has revolutionized how we track our vehicles. Real-time monitoring and driver safety features are game-changers.",
    },
    {
      name: "Dr. Grace Nyong'o",
      position: "Director, Nairobi Medical Center",
      company: "Nairobi Medical Center",
      // image:
      //   "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=150&h=150",
      rating: 5,
      text: "Their hospital management system streamlined our patient care processes. The biometric integration ensures secure and efficient patient identification.",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  // Handle slideshow rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % testimonials.length);
        setFade(true);
      }, 400); // match fade-out before switching
    }, 6000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const testimonial = testimonials[current];

  return (
    <section
      id="testimonials"
      className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-primary to-primary/90"
    >
      <div className="max-w-4xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14 md:mb-16">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            What Our Clients Say
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-xs sm:max-w-xl md:max-w-3xl mx-auto">
            Trusted by leading organizations across Africa
          </p>
        </div>

        <div className="flex justify-center">
          <div
            className="glass-primary p-4 sm:p-8 max-w-xs sm:max-w-lg md:max-w-xl w-full text-center"
            style={{
              transition: "opacity 0.5s ease-in-out",
              opacity: fade ? 1 : 0,
            }}
          >
            <div className="flex justify-center mb-4 sm:mb-6">
              <Quote className="h-6 w-6 sm:h-8 sm:w-8 text-secondary" />
            </div>

            <p className="text-white/90 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
              "{testimonial.text}"
            </p>

            <div className="flex justify-center mb-2 sm:mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 text-secondary fill-current" />
              ))}
            </div>

            <div className="flex items-center justify-center">
              <img
                // src={testimonial.image}
                alt={testimonial.name}
                className="w-8 h-8 sm:w-12 sm:h-12 rounded-full object-cover mr-2 sm:mr-4 border-2 border-secondary/50"
              />
              <div className="text-left">
                <h4 className="text-white font-semibold text-sm sm:text-base">{testimonial.name}</h4>
                <p className="text-white/70 text-xs sm:text-sm">{testimonial.position}</p>
                <p className="text-secondary text-xs sm:text-sm font-medium">
                  {testimonial.company}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
