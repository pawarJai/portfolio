"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// @ts-expect-error: Ignore type-checking error for demonstration
const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "John Doe",
      feedback: "Jayesh delivered an amazing project, exceeding expectations!",
      role: "CEO, TechCorp",
    },
    {
      name: "Jane Smith",
      feedback: "An exceptional developer with a keen eye for detail.",
      role: "Project Manager, InnovateCo",
    },
  ];

  return (
    <section id="testimonials" className="py-16 bg-gradient-to-br from-black to-dark text-light">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-primary">Testimonials</h2>
        <Swiper spaceBetween={30} slidesPerView={1} loop={true} autoplay={{ delay: 5000 }}>
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="text-center">
              <blockquote className="text-lg italic max-w-3xl mx-auto">
                "{testimonial.feedback}"
              </blockquote>
              <p className="mt-4 text-primary font-bold">{testimonial.name}</p>
              <p className="text-light">{testimonial.role}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
