import { useState } from "react";

const testimonials = [
  {
    quote:
      "Inndess transformed our house into a home that truly reflects who we are. Their attention to detail and understanding of our vision was exceptional.",
    name: "Sarah & Michael Thompson",
    role: "Homeowners, Manhattan Residence",
  },
  {
    quote:
      "The BIM modeling accuracy and coordination exceeded our expectations. The project delivery was smooth and highly professional.",
    name: "David Reynolds",
    role: "Project Manager, Commercial Development",
  },
  {
    quote:
      "Their renovation and retrofit modeling saved us significant time on-site. Extremely reliable and detail-oriented team.",
    name: "Emily Carter",
    role: "Architect, Urban Design Studio",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrent((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="bg-[#faf7f2] py-40">
      <div className="max-w-4xl mx-auto px-6 text-center">

        {/* Heading */}
        <p className="text-xs tracking-widest text-[#caa36a] uppercase mb-6">
          Testimonials
        </p>

        <h2 className="text-5xl font-serif text-black mb-16">
          What Our <span className="italic">Clients Say</span>
        </h2>

        {/* Quote Icon */}
        <div className="text-8xl text-[#e5d3a3] font-serif mb-10 leading-none">
          “”
        </div>

        {/* Testimonial */}
        <p className="text-2xl font-serif text-black leading-relaxed mb-14">
          “{testimonials[current].quote}”
        </p>

        {/* Divider */}
        <div className="w-14 h-px bg-[#caa36a] mx-auto mb-10"></div>

        {/* Author */}
        <p className="text-lg font-serif text-black">
          {testimonials[current].name}
        </p>
        <p className="text-sm text-gray-600 mt-2">
          {testimonials[current].role}
        </p>

        {/* Controls */}
        <div className="flex items-center justify-center gap-6 mt-16">

          {/* Prev */}
          <button
            onClick={prevSlide}
            className="w-12 h-12 border border-[#ddd6c9] flex items-center justify-center text-xl hover:bg-black hover:text-white transition"
          >
            ‹
          </button>

          {/* Dots */}
          <div className="flex gap-3">
            {testimonials.map((_, index) => (
              <span
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === current
                    ? "bg-[#caa36a]"
                    : "bg-[#ddd6c9]"
                }`}
              ></span>
            ))}
          </div>

          {/* Next */}
          <button
            onClick={nextSlide}
            className="w-12 h-12 border border-[#ddd6c9] flex items-center justify-center text-xl hover:bg-black hover:text-white transition"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
