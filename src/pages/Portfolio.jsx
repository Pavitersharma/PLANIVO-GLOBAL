import React from 'react'
import Header from '../component/Header'

export default function Portfolio() {
  return (
    <>
    <Header/>
    <section
      className="relative w-full min-h-[80vh] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/portfolio-bg.jpg')", // replace with your image
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/85"></div>

      {/* Content */}
      <div className="relative z-10 max-w-xl text-center px-6">
        {/* Label */}
        <p className="text-xs tracking-[0.35em] text-[#caa36a →] uppercase mb-4">
          Our Portfolio
        </p>

        {/* Title */}
        <h2 className="font-serif text-2xl md:text-3xl text-black mb-3">
          Featured <br />
          <span className="font-normal">Projects</span>
        </h2>

        {/* Divider */}
        <div className="w-12 h-[1px] bg-[#caa36a] mx-auto mb-6"></div>

        {/* Description */}
        <p className="text-sm text-gray-600 leading-relaxed">
          Explore our collection of thoughtfully designed spaces that blend
          beauty with functionality.
        </p>
      </div>
    </section>
    <section class="bg-[#fbf9f6] py-20">
  {/* <!-- Filters --> */}
  <div class="flex justify-center gap-4 mb-16">
    <button class="px-6 py-2 text-sm uppercase tracking-widest bg-[#caa36a] text-white">
      All
    </button>
    <button class="px-6 py-2 text-sm uppercase tracking-widest border border-[#caa36a] text-[#caa36a] hover:bg-[#caa36a] hover:text-white transition">
      Residential
    </button>
    <button class="px-6 py-2 text-sm uppercase tracking-widest border border-[#caa36a] text-[#caa36a] hover:bg-[#caa36a] hover:text-white transition">
      Commercial
    </button>
    <button class="px-6 py-2 text-sm uppercase tracking-widest border border-[#caa36a] text-[#caa36a] hover:bg-[#caa36a] hover:text-white transition">
      Hospitality
    </button>
  </div>

  {/* <!-- Grid --> */}
  <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6">
    
    {/* <!-- Card 1 --> */}
    <div class="relative overflow-hidden group">
      <img
        src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0"
        class="w-full h-[600px] object-cover group-hover:scale-105 transition duration-700"
        alt="Bedroom"
      />

      <div class="absolute inset-0 bg-black/10"></div>

      <div class="absolute bottom-8 left-8 text-white">
        <p class="text-xs uppercase tracking-widest opacity-80">
          Residential · 2024
        </p>
        <h3 class="text-2xl font-serif mt-2">
          Modern Bedroom Retreat
        </h3>
      </div>
    </div>

    {/* <!-- Card 2 --> */}
    <div class="relative overflow-hidden group">
      <img
        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
        class="w-full h-[600px] object-cover group-hover:scale-105 transition duration-700"
        alt="Kitchen"
      />

      <div class="absolute inset-0 bg-black/10"></div>

      <div class="absolute bottom-8 left-8 text-white">
        <p class="text-xs uppercase tracking-widest opacity-80">
          Residential · 2024
        </p>
        <h3 class="text-2xl font-serif mt-2">
          Contemporary Kitchen
        </h3>
      </div>
    </div>
    {/* <!-- Card 3--> */}
    <div class="relative overflow-hidden group">
      <img
        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
        class="w-full h-[600px] object-cover group-hover:scale-105 transition duration-700"
        alt="Kitchen"
      />

      <div class="absolute inset-0 bg-black/10"></div>

      <div class="absolute bottom-8 left-8 text-white">
        <p class="text-xs uppercase tracking-widest opacity-80">
          Residential · 2024
        </p>
        <h3 class="text-2xl font-serif mt-2">
          Contemporary Kitchen
        </h3>
      </div>
    </div>
    {/* <!-- Card 4--> */}
    <div class="relative overflow-hidden group">
      <img
        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
        class="w-full h-[600px] object-cover group-hover:scale-105 transition duration-700"
        alt="Kitchen"
      />

      <div class="absolute inset-0 bg-black/10"></div>

      <div class="absolute bottom-8 left-8 text-white">
        <p class="text-xs uppercase tracking-widest opacity-80">
          Residential · 2024
        </p>
        <h3 class="text-2xl font-serif mt-2">
          Contemporary Kitchen
        </h3>
      </div>
    </div>

  </div>
</section>


<section className="w-full bg-[#faf8f4] py-28 px-4">
      <div className="max-w-5xl mx-auto text-center">
        
        {/* Small Top Text */}
        <p className="text-xs tracking-[0.25em] text-[#caa36a] uppercase mb-4">
          Your Project Starts Here
        </p>

        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl font-serif text-[#1c1c1c] leading-tight">
          Ready to Elevate Your <br />
          <span className="italic">BIM Workflow?</span>
        </h2>

        {/* Divider */}
        <div className="w-12 h-[2px] bg-[#caa36a] mx-auto my-6"></div>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-sm md:text-base text-[#6f6f6f] leading-relaxed mb-10">
          Let PLANIVO GLOBAL transform your construction vision into precise,
          data-driven BIM solutions. From modeling to coordination, we support
          your project at every stage with accuracy and efficiency.
        </p>

        {/* CTA Button */}
        <button className="inline-flex items-center gap-3 bg-[#1c1c1c] text-white px-8 py-4 text-xs tracking-widest uppercase hover:bg-[#333] transition">
          Schedule a BIM Consultation
          <span className="text-lg">→</span>
        </button>

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
  )
}
