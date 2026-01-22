const About = () => {
  return (
    <section className="w-full bg-[#f8f5f0] py-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* Image */}
        <div className="w-full">
          <img
            src="/src/assets/about.png"
            alt="PLANIVO GLOBAL BIM Team"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div>
          <p className="text-xs tracking-[0.3em] text-[#caa36a] uppercase mb-4">
            About Us
          </p>

          <h2 className="font-serif text-4xl md:text-5xl text-[#1f1f1f] leading-tight">
            Building Precision <br />
            <span className="italic text-gray-500">
              Through BIM Excellence
            </span>
          </h2>

          <div className="w-16 h-[1px] bg-[#caa36a] my-6"></div>

          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            PLANIVO GLOBAL is a specialized Architectural BIM services provider,
            delivering accurate, data-driven models that support the full project
            lifecycle—from early design concepts to construction and as-built
            documentation.
          </p>

          <p className="text-gray-600 text-sm leading-relaxed mb-10">
            Our team collaborates closely with architects, contractors, and
            developers to streamline workflows, enhance coordination, and reduce
            project risks through high-quality BIM execution aligned with global
            standards.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <h3 className="text-3xl font-serif text-[#caa36a]">10+</h3>
              <p className="text-xs tracking-wide text-gray-600">
                Years Experience
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-serif text-[#caa36a]">250+</h3>
              <p className="text-xs tracking-wide text-gray-600">
                BIM Projects
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-serif text-[#caa36a]">LOD 100–500</h3>
              <p className="text-xs tracking-wide text-gray-600">
                Modeling Expertise
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-serif text-[#caa36a]">Global</h3>
              <p className="text-xs tracking-wide text-gray-600">
                Client Reach
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
