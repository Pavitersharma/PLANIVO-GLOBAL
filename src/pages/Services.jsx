import React from "react";
import Header from "../component/Header";
import { Link } from "react-router-dom";

export default function Services() {
  const processSteps = [
    {
      step: "01",
      title: "Discovery",
      desc: "We begin with an in-depth consultation to understand your vision, lifestyle, and functional requirements.",
    },
    {
      step: "02",
      title: "Concept Development",
      desc: "Our team creates mood boards, sketches, and 3D visualizations to bring your vision to life.",
    },
    {
      step: "03",
      title: "Design & Planning",
      desc: "Detailed floor plans, material selections, and procurement lists are prepared for execution.",
    },
    {
      step: "04",
      title: "Implementation",
      desc: "We oversee every aspect of the project, from construction to final styling and delivery.",
    },
  ];

  const services = [
    {
      title: "Residential Design",
      desc: "Transform your home into a refined sanctuary that reflects your lifestyle and enhances everyday living.",
      points: [
        "Complete home renovation",
        "Kitchen & bathroom design",
        "Living space optimization",
        "Bedroom retreats",
      ],
    },
    {
      title: "Commercial Spaces",
      desc: "Design inspiring commercial environments that elevate productivity and strengthen brand identity.",
      points: [
        "Office design & planning",
        "Retail environments",
        "Hospitality spaces",
        "Corporate headquarters",
      ],
    },
    {
      title: "Interior Styling",
      desc: "Curated selections of furniture, art, and accessories to bring your vision to life.",
      points: [
        "Furniture selection",
        "Art curation",
        "Textiles & fabrics",
        "Accessory placement",
      ],
    },
    {
      title: "Space Planning",
      desc: "Optimized layouts that balance flow, function, and visual harmony in every space.",
      points: [
        "Floor plan optimization",
        "Traffic flow analysis",
        "Zoning strategies",
        "Furniture layout",
      ],
    },
    {
      title: "Lighting Design",
      desc: "Layered lighting solutions crafted to create mood, comfort, and architectural emphasis.",
      points: [
        "Ambient lighting",
        "Task lighting design",
        "Accent lighting",
        "Smart lighting systems",
      ],
    },
    {
      title: "Furniture Design",
      desc: "Bespoke furniture pieces tailored to your space and aesthetic preferences.",
      points: [
        "Custom furniture creation",
        "Upholstery services",
        "Built-in solutions",
        "Restoration work",
      ],
    },
  ];
  return (
    <>
      <Header />
      <section
        className="relative w-full min-h-[80vh] flex items-center"
        style={{
          backgroundImage: "url('/services-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-white/70"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="max-w-xl">
            <p className="text-sm tracking-widest text-[#caa36a] uppercase mb-4">
              Our Services
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-black leading-tight mb-6">
              Comprehensive Design <br /> Solutions
            </h2>

            <div className="w-16 h-[2px] bg-[#caa36a] mb-6"></div>

            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              From concept to completion, we offer a full spectrum of design
              services tailored to bring your vision to reality.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-[#fbf8f3] py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.35em] text-[#caa36a] uppercase mb-4">
              Our Services
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-black">
              Comprehensive Design Solutions
            </h2>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-[#fdfbf7] border border-[#e6ddcf] p-8 transition-all duration-300 hover:border-[#caa36a] hover:-translate-y-2"
              >
                {/* Icon */}
                <div className="w-12 h-12 border border-[#caa36a] flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-[#caa36a]">
                  <span className="text-[#caa36a] group-hover:text-white transition">
                    ⌂
                  </span>
                </div>

                {/* Content */}
                <h3 className="font-serif text-lg text-black mb-3">
                  {service.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  {service.desc}
                </p>

                <ul className="space-y-2 text-sm text-gray-700">
                  {service.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#caa36a] mt-[2px]">✓</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#fbf8f3] py-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center max-w-2xl mx-auto mb-20">
            <p className="text-xs tracking-[0.35em] text-[#caa36a] uppercase mb-4">
              Our Process
            </p>

            <h2 className="text-3xl md:text-4xl font-serif text-black mb-4">
              How We Work
            </h2>

            <div className="w-12 h-[1px] bg-[#caa36a] mx-auto mb-6"></div>

            <p className="text-sm text-gray-600 leading-relaxed">
              A seamless journey from initial concept to final reveal, ensuring
              every detail reflects your unique vision.
            </p>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {processSteps.map((item, index) => (
              <div key={index} className="text-center">
                {/* Step Number */}
                <p className="text-4xl font-serif text-[#e6ddcf] mb-4">
                  {item.step}
                </p>

                {/* Divider */}
                <div className="w-10 h-[1px] bg-[#e6ddcf] mx-auto mb-6"></div>

                {/* Title */}
                <h3 className="font-serif text-lg text-black mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fbf8f3] py-28">
        <div className="max-w-3xl mx-auto px-6 text-center">
          {/* Small label */}
          <p className="text-xs tracking-[0.35em] text-[#caa36a] uppercase mb-4">
            Ready to Transform?
          </p>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-black leading-tight mb-6">
            Let&apos;s Create Something{" "}
            <span className="italic">Beautiful Together</span>
          </h2>

          {/* Divider */}
          <div className="w-14 h-[1px] bg-[#caa36a] mx-auto mb-6"></div>

          {/* Description */}
          <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-10">
            Every great space begins with a conversation. Share your vision with
            us, and let&apos;s embark on a journey to create interiors that
            inspire.
          </p>

          {/* CTA Button */}
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#1f1f1d] text-white px-8 py-4 text-xs tracking-[0.25em] uppercase hover:bg-[#caa36a] transition"
          >
            Start Your Project
            <span className="text-sm">→</span>
          </Link>
        </div>
      </section>

      <section className="bg-[#2B2621] py-20 px-4">
        {/* FOOTER */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="border-t border-gray-700 pt-24 pb-14 mt-10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
              {/* BRAND */}
              <div>
                <h3 className="font-serif text-2xl text-white mb-6">
                  PLANIVO GLOBAL
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-8">
                  Streamlined BIM solutions delivering precision, coordination,
                  and design clarity across every project stage.
                </p>
              </div>

              {/* COMPANY */}
              <div>
                <p className="text-xs tracking-widest uppercase text-[#caa36a] mb-6">
                  Company
                </p>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li>About Us</li>
                  <li>Our Team</li>
                  <li>Careers</li>
                  <li>Contact</li>
                </ul>
              </div>

              {/* SERVICES */}
              <div>
                <p className="text-xs tracking-widest uppercase text-[#caa36a] mb-6">
                  Services
                </p>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li>BIM Modeling</li>
                  <li>LOD 100–500</li>
                  <li>As-Built Models</li>
                  <li>Renovation BIM</li>
                </ul>
              </div>

              {/* RESOURCES */}
              <div>
                <p className="text-xs tracking-widest uppercase text-[#caa36a] mb-6">
                  Resources
                </p>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li>Portfolio</li>
                  <li>Case Studies</li>
                  <li>Blog</li>
                  <li>FAQ</li>
                </ul>
              </div>
            </div>

            {/* COPYRIGHT */}
            <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
              <p>© 2026 PLANIVO GLOBAL. All rights reserved.</p>
              <div className="flex gap-6 mt-4 md:mt-0">
                <span>Privacy Policy</span>
                <span>Terms of Service</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
