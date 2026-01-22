import {
  FaDraftingCompass,
  FaProjectDiagram,
  FaCubes,
  FaLayerGroup,
  FaBuilding,
  FaTools,
} from "react-icons/fa";

const Services = () => {
  const services = [
    {
      title: "Concept BIM Modeling",
      description:
        "Early-stage BIM models that help visualize design intent, massing, and spatial feasibility from the concept phase.",
      icon: <FaDraftingCompass />,
    },
    {
      title: "Schematic BIM Modeling",
      description:
        "Coordinated schematic models defining layouts and spatial relationships to support informed design development.",
      icon: <FaProjectDiagram />,
    },
    {
      title: "Detailed BIM Modeling",
      description:
        "Highly detailed BIM models that improve coordination, accuracy, and readiness for construction execution.",
      icon: <FaCubes />,
    },
    {
      title: "LOD 100–500 Modeling",
      description:
        "Comprehensive BIM services across all LOD stages, aligned with project goals and delivery requirements.",
      icon: <FaLayerGroup />,
    },
    {
      title: "As-Built Modeling",
      description:
        "Accurate as-built BIM models developed from drawings or site data, reflecting real-world conditions.",
      icon: <FaBuilding />,
    },
    {
      title: "Renovation & Retrofit BIM",
      description:
        "Reliable BIM models for renovation and retrofit projects, enabling efficient planning and execution.",
      icon: <FaTools />,
    },
  ];

  return (
    <section className="bg-[#faf7f2] py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <p className="text-xs tracking-widest text-[#caa36a] uppercase mb-4">
            Our Services
          </p>

          <h2 className="text-5xl font-serif text-black leading-tight">
            Comprehensive Design <br />
            <span className="italic">Solutions</span>
          </h2>

          <div className="w-16 h-px bg-[#caa36a] mx-auto my-8"></div>

          <p className="text-gray-600 leading-relaxed">
            From concept to completion, we deliver intelligent BIM services
            tailored to streamline workflows and bring architectural visions to
            life.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="border border-[#e3dccf] bg-[#fdfbf7] p-12 hover:shadow-lg transition"
            >
              {/* Icon Box */}
              <div className="w-14 h-14 border border-[#caa36a] flex items-center justify-center text-[#caa36a] text-xl mb-8">
                {service.icon}
              </div>

              <h3 className="text-2xl font-serif text-black mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Explore More */}
        <div className="mt-28 text-center">
          <p className="text-gray-600 mb-8">
            Need advanced or customized BIM solutions?
          </p>

          <button className="border border-[#caa36a] px-14 py-4 text-sm tracking-widest uppercase hover:bg-[#caa36a] hover:text-white transition">
            Explore More Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
