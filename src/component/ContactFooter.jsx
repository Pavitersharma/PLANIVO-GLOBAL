import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

const ContactFooter = () => {
  return (
    <section className="bg-[#2b2a28] text-[#eae6df] pt-36">
      <div className="max-w-7xl mx-auto px-6">

        {/* CONTACT SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-40">

          {/* LEFT CONTENT */}
          <div>
            <p className="text-xs tracking-widest text-[#caa36a] uppercase mb-6">
              Get In Touch
            </p>

            <h2 className="text-5xl font-serif leading-tight mb-10">
              Let's Create Something <br />
              <span className="italic">Beautiful Together</span>
            </h2>

            <div className="w-16 h-px bg-[#caa36a] mb-10"></div>

            <p className="text-gray-400 leading-relaxed max-w-lg mb-14">
              Ready to elevate your project with intelligent BIM solutions?
              Whether you're in early design or construction execution,
              PLANIVO GLOBAL is here to support your vision.
            </p>

            {/* CONTACT INFO */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

              <div className="flex gap-4">
                <FaMapMarkerAlt className="text-[#caa36a] mt-1" />
                <div>
                  <p className="font-serif text-white mb-1">Visit Us</p>
                  <p className="text-sm text-gray-400">
                    Gurugram, Haryana<br />India
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <FaPhoneAlt className="text-[#caa36a] mt-1" />
                <div>
                  <p className="font-serif text-white mb-1">Call Us</p>
                  <p className="text-sm text-gray-400">
                    +91 9XXXXXXXXX
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <FaEnvelope className="text-[#caa36a] mt-1" />
                <div>
                  <p className="font-serif text-white mb-1">Email Us</p>
                  <p className="text-sm text-gray-400">
                    contact@planivoglobal.com
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <FaClock className="text-[#caa36a] mt-1" />
                <div>
                  <p className="font-serif text-white mb-1">Working Hours</p>
                  <p className="text-sm text-gray-400">
                    Mon – Sat: 9AM – 6PM
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT FORM */}
          <form className="space-y-10">

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              <input
                type="text"
                placeholder="First Name"
                className="bg-transparent border-b border-gray-600 pb-3 outline-none placeholder-gray-500 focus:border-[#caa36a]"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="bg-transparent border-b border-gray-600 pb-3 outline-none placeholder-gray-500 focus:border-[#caa36a]"
              />
            </div>

            <input
              type="email"
              placeholder="Email"
              className="w-full bg-transparent border-b border-gray-600 pb-3 outline-none placeholder-gray-500 focus:border-[#caa36a]"
            />

            <input
              type="text"
              placeholder="Phone"
              className="w-full bg-transparent border-b border-gray-600 pb-3 outline-none placeholder-gray-500 focus:border-[#caa36a]"
            />

            <textarea
              rows="4"
              placeholder="Tell us about your project..."
              className="w-full bg-transparent border-b border-gray-600 pb-3 outline-none placeholder-gray-500 focus:border-[#caa36a]"
            ></textarea>

            <button
              type="submit"
              className="bg-[#caa36a] text-black px-14 py-4 text-xs tracking-widest uppercase hover:bg-white transition"
            >
              Send Message
            </button>

          </form>
        </div>

        {/* FOOTER */}
        <div className="border-t border-gray-700 pt-24 pb-14">

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
  );
};

export default ContactFooter;
