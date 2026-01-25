const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center"
      style={{
        backgroundImage: "url('/src/assets/hero.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Soft Overlay */}
      <div className="absolute inset-0 bg-white/10"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">

          <p className="text-xs tracking-[0.3em] text-[#caa36a] uppercase mb-4">
            Architectural BIM Services
          </p>

          <h1 className="font-serif text-5xl md:text-6xl text-[#1f1f1f] leading-tight">
            Streamlined BIM Solutions <br />
            <span className="italic text-gray-500">
              That Build with Precision
            </span>
          </h1>

          <p className="mt-6 text-gray-600 text-sm leading-relaxed">
            PLANIVO GLOBAL delivers end-to-end Architectural BIM services—
            from concept to construction—helping AEC professionals streamline
            workflows, reduce errors, and execute projects with confidence
            through accurate, data-rich BIM models.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex items-center gap-4">
            <button className="bg-[#2b2a28] text-white px-8 py-3 text-xs tracking-widest hover:bg-[#caa36a] transition">
              VIEW OUR SERVICES
            </button>

            <button className="border border-[#2b2a28] text-[#2b2a28] px-8 py-3 text-xs tracking-widest hover:bg-[#2b2a28] hover:text-white transition">
              REQUEST A CONSULTATION
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs tracking-widest text-gray-500 mt-5">
        SCROLL ↓
      </div>
    </section>
  );
};

export default Hero;
