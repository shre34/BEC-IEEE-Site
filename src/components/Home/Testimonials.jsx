import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "True volunteering goes beyond assigned responsibilities; it is the passion to contribute, collaborate, and create lasting impact. At the BEC IEEE Student Branch, every initiative is powered by teamwork, innovation, and the spirit of growing together. It is a community where experiences shape leadership and every effort builds a better, more inspiring future.",
    },
  ];

  return (
    <section className="relative bg-black w-full py-20 text-white overflow-hidden">

      {/* 🔥 BACKGROUND GLOW */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="w-[500px] h-[500px] bg-purple-700/20 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-10">

        {/* LEFT SIDE */}
        <div className="lg:w-1/2 text-left">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            The Spirit of <br />
            <span className="bg-gradient-to-r from-purple-400 via-purple-300 to-purple-100 bg-clip-text text-transparent">
              BEC-IEEE
            </span>
          </h2>

          <p className="mt-4 text-gray-400 text-sm md:text-base">
            A community driven by passion, purpose, and people.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="lg:w-1/2 relative">
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-purple-600 to-purple-900 opacity-30 blur"></div>

          <div className="relative bg-[#1E1E1E] border border-white/10 rounded-2xl p-8 shadow-2xl backdrop-blur-md">
            {testimonials.map((testimonial, index) => (
              <p
                key={index}
                className="text-base sm:text-lg md:text-xl italic leading-relaxed text-gray-200"
              >
                “{testimonial.quote}”
              </p>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;