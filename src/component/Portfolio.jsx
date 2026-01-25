import {
  FaAward,
  FaUsers,
  FaClock,
  FaUserCheck,
  FaShieldAlt,
  FaHandsHelping,
} from "react-icons/fa";

const WhyChooseUs = () => {
  const features = [
    {
      title: "Industry-Recognized Excellence",
      description:
        "Proven BIM expertise delivering accurate, coordinated, and reliable models for complex projects.",
      icon: <FaAward />,
    },
    {
      title: "Expert BIM Team",
      description:
        "A skilled team of BIM professionals with deep experience across architecture, structure, and MEP.",
      icon: <FaUsers />,
    },
    {
      title: "On-Time Delivery",
      description:
        "We follow structured workflows and milestones to ensure timely and predictable project delivery.",
      icon: <FaClock />,
    },
    {
      title: "Tailored BIM Solutions",
      description:
        "Every BIM model is customized to your project scope, standards, and execution requirements.",
      icon: <FaUserCheck />,
    },
    {
      title: "Quality & Compliance",
      description:
        "Strict QA/QC processes ensure models meet international BIM standards and client expectations.",
      icon: <FaShieldAlt />,
    },
    {
      title: "Client-Focused Approach",
      description:
        "Clear communication, transparency, and long-term partnerships are at the core of our process.",
      icon: <FaHandsHelping />,
    },
  ];

  return (
    <section className="bg-[#faf7f2] py-36">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <p className="text-xs tracking-widest text-[#caa36a] uppercase mb-4">
            Why Choose Us
          </p>

          <h2 className="text-5xl font-serif leading-tight mb-8">
            The PLANIVO GLOBAL <br />
            <span className="italic">Difference</span>
          </h2>

          <div className="w-16 h-px bg-[#caa36a] mx-auto mb-8"></div>

          <p className="text-gray-600 leading-relaxed">
            We combine technical expertise, precision modeling, and a
            client-first mindset to deliver BIM solutions that drive
            confidence and project success.
          </p>
        </div>

        {/* FEATURES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-28">
          {features.map((item, index) => (
            <div
              key={index}
              className="
                bg-[#fdfbf7]
                border border-[#e3dccf]
                p-10
                transition
                hover:shadow-lg
              "
            >
              <div className="w-14 h-14 border border-[#caa36a] flex items-center justify-center text-[#caa36a] text-xl mb-8">
                {item.icon}
              </div>

              <h3 className="text-xl font-serif mb-4">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-relaxed text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* STATS */}
        <div className="border-t border-[#e3dccf] pt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">

            <div>
              <p className="text-4xl font-serif text-[#caa36a] mb-2">10+</p>
              <p className="text-xs tracking-widest uppercase text-gray-500">
                Years Experience
              </p>
            </div>

            <div>
              <p className="text-4xl font-serif text-[#caa36a] mb-2">200+</p>
              <p className="text-xs tracking-widest uppercase text-gray-500">
                Projects Delivered
              </p>
            </div>

            <div>
              <p className="text-4xl font-serif text-[#caa36a] mb-2">50+</p>
              <p className="text-xs tracking-widest uppercase text-gray-500">
                BIM Standards & LODs
              </p>
            </div>

            <div>
              <p className="text-4xl font-serif text-[#caa36a] mb-2">98%</p>
              <p className="text-xs tracking-widest uppercase text-gray-500">
                Client Satisfaction
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
