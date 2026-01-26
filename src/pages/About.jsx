import React from "react";
import Header from "../component/Header";
import team1 from "../assets/about/team1.png"
import team2 from "../assets/about/team2.png"
import ContactFooter from "../component/ContactFooter";

export default function About() {

    const stats = [
    { value: "15+", label: "Years Experience" },
    { value: "200+", label: "Projects Completed" },
    { value: "50+", label: "Design Awards" },
    { value: "100%", label: "Client Satisfaction" },
  ];


  const team = [
    {
      name: "Sarah Mitchell",
      role: "Founder & Principal Designer",
      image: team1,
    },
    {
      name: "James Chen",
      role: "Senior Interior Designer",
      image: team2,
    },
    {
      name: "Emma Williams",
      role: "Project Manager",
      image: team1,
    },
    {
      name: "Michael Ross",
      role: "3D Visualization Specialist",
      image: team2,
    },
  ];
  return (
    <>

    <Header/>
      
        
      <section className="bg-[#FAF7F2] py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT CONTENT */}
          <div className="max-w-md">
            <p className="text-xs tracking-[0.3em] uppercase text-[#C9A24D] mb-6">
              About Us
            </p>

            <h2 className="text-3xl md:text-4xl font-serif text-gray-900 leading-snug mb-6">
              Crafting Spaces, <br />
              <span className="italic">Creating Stories</span>
            </h2>

            <div className="w-12 h-[1px] bg-[#C9A24D] mb-6"></div>

            <p className="text-gray-600 leading-relaxed">
              For over 15 years, Inndess has been transforming spaces into
              extraordinary experiences that reflect the unique personalities
              of our clients.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full">
            <img
              src="/about/about-1.jpg"
              alt="About Inndess"
              className="w-full h-[600px] object-cover"
            />
          </div>

        </div>
      </div>
    </section>
   <section className="bg-[#FAF7F2] py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {stats.map((item, index) => (
            <div
              key={index}
              className="transition-transform duration-300 hover:-translate-y-2 active:-translate-y-2"
            >
              <h2 className="text-5xl font-medium text-[#C9A24D] mb-3">
                {item.value}
              </h2>
              <p className="text-xs tracking-[0.2em] uppercase text-gray-600">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
    <section className="bg-[#FAF7F2] py-32">
      <div className="max-w-4xl mx-auto px-4 text-center">
        
        {/* Small label */}
        <p className="text-xs tracking-[0.3em] uppercase text-[#C9A24D] mb-6">
          Our Story
        </p>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">
          A Passion for <span className="italic">Beautiful Spaces</span>
        </h2>

        {/* Divider */}
        <div className="w-12 h-[1px] bg-[#C9A24D] mx-auto mb-10"></div>

        {/* Content */}
        <div className="space-y-8 text-gray-600 leading-relaxed text-[15px]">
          <p>
            Founded in 2009, Inndess began with a simple belief: that great design
            has the power to transform not just spaces, but lives. What started
            as a one-woman studio has grown into a full-service interior design
            firm with a team of passionate creatives.
          </p>

          <p>
            Over the years, we’ve had the privilege of working on hundreds of
            projects across residential, commercial, and hospitality sectors.
            Each project has taught us something new and deepened our
            understanding of how spaces can influence well-being and inspire
            daily life.
          </p>

          <p>
            Today, we continue to push boundaries while staying true to our core
            philosophy: listening deeply, designing thoughtfully, and executing
            flawlessly. Every space we create tells a story—your story.
          </p>
        </div>

      </div>
    </section>

    <section className="bg-[#FAF7F2] py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-[#C9A24D] mb-4">
            Our Values
          </p>

          <h2 className="text-3xl md:text-5xl font-serif text-gray-900 mb-4">
            What Guides <span className="italic">Our Work</span>
          </h2>

          <div className="w-12 h-[1px] bg-[#C9A24D] mx-auto"></div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 01 */}
          <div className="border border-[#E6DFD3] p-8 md:p-10 bg-[#FBF9F5]">
            <span className="text-3xl font-serif text-[#E2D4B8]">01</span>
            <h3 className="text-xl font-serif text-gray-900 mt-4 mb-3">
              Timeless Design
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              We create spaces that transcend trends, focusing on enduring beauty
              and quality craftsmanship.
            </p>
          </div>

          {/* Card 02 */}
          <div className="border border-[#E6DFD3] p-8 md:p-10 bg-[#FBF9F5]">
            <span className="text-3xl font-serif text-[#E2D4B8]">02</span>
            <h3 className="text-xl font-serif text-gray-900 mt-4 mb-3">
              Client-Centered
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Every project begins with deep listening. Your vision, lifestyle,
              and needs guide every decision.
            </p>
          </div>

          {/* Card 03 */}
          <div className="border border-[#E6DFD3] p-8 md:p-10 bg-[#FBF9F5]">
            <span className="text-3xl font-serif text-[#E2D4B8]">03</span>
            <h3 className="text-xl font-serif text-gray-900 mt-4 mb-3">
              Attention to Detail
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              From fabric textures to hardware finishes, we obsess over the
              details that elevate a space.
            </p>
          </div>

          {/* Card 04 */}
          <div className="border border-[#E6DFD3] p-8 md:p-10 bg-[#FBF9F5]">
            <span className="text-3xl font-serif text-[#E2D4B8]">04</span>
            <h3 className="text-xl font-serif text-gray-900 mt-4 mb-3">
              Sustainable Practice
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              We prioritize eco-conscious materials and practices without
              compromising on luxury.
            </p>
          </div>

        </div>
      </div>
    </section>

    <section className="bg-[#FAF7F2] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-xs tracking-[0.3em] uppercase text-[#C9A24D] mb-4">
            Our Team
          </p>

          <h2 className="text-3xl md:text-5xl font-serif text-gray-900 mb-6">
            Meet the <span className="italic">Creatives</span>
          </h2>

          <div className="w-12 h-[1px] bg-[#C9A24D] mx-auto mb-6"></div>

          <p className="max-w-xl mx-auto text-gray-600 text-sm leading-relaxed">
            A talented team of designers, architects, and project managers
            dedicated to bringing your vision to life.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {team.map((member, index) => (
            <div key={index} className="text-center group">
              
              {/* Image */}
              <div className="overflow-hidden mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="
                    w-full
                    h-[420px]
                    object-cover
                    transition
                    duration-500
                    group-hover:scale-105
                  "
                />
              </div>

              {/* Name */}
              <h3 className="text-lg font-serif text-gray-900">
                {member.name}
              </h3>

              {/* Role */}
              <p className="text-xs uppercase tracking-widest text-gray-500 mt-1">
                {member.role}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
    <section className="bg-[#2B2621] py-32 px-4">
      <div className="max-w-4xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">
          Ready to Work <span className="italic">Together?</span>
        </h2>

        {/* Subtitle */}
        <p className="text-sm md:text-base text-gray-300 max-w-xl mx-auto mb-12 leading-relaxed">
          Let’s discuss how we can transform your space into something truly
          extraordinary.
        </p>

        {/* Button */}
        <a
          href="/contact"
          className="
            inline-flex
            items-center
            gap-3
            border
            border-white
            px-8
            py-4
            text-xs
            tracking-[0.25em]
            uppercase
            text-white
            transition
            duration-300
            hover:bg-white
            hover:text-[#2B2621]
          "
        >
          Start a Conversation
          <span className="text-lg">→</span>
        </a>

      </div>




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
                Streamlined BIM solutions delivering precision,
                coordination, and design clarity across every
                project stage.
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
