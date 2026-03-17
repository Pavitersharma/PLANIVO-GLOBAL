import React, { useState } from 'react'
import Header from '../component/Header'
import { MapPin, Phone, Mail, Clock } from "lucide-react";



const faqs = [
  {
    question: "What is your design process?",
    answer:
      "Our process begins with a discovery session to understand your needs, followed by concept development, design refinement, and finally implementation with ongoing support.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary based on scope. A single room might take 4–6 weeks, while a full home renovation could span 6–12 months. We provide detailed timelines during consultation.",
  },
  {
    question: "Do you work with existing furniture?",
    answer:
      "Absolutely! We love incorporating meaningful pieces into new designs. We'll assess your existing items and suggest how to integrate them beautifully.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "While based in New York, we work with clients nationwide and internationally for larger projects. Virtual consultations are available for remote clients.",
  },
];


export default function Contact() {


  const [openIndex, setOpenIndex] = useState(0);   

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
     

     <Header/>



     <section
      className="relative h-[500px] flex items-center justify-center text-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/70"></div>

      {/* Content */}
      <div className="relative max-w-xl px-6">
        <p className="tracking-[4px] text-sm text-[#caa16a] mb-4">
          GET IN TOUCH
        </p>

        <h2 className="text-3xl font-serif mb-4">
          Let's Start a <span className="italic">Conversation</span>
        </h2>

        <div className="w-12 h-[2px] bg-[#caa16a] mx-auto mb-6"></div>

        <p className="text-gray-600">
          Have a project in mind? We'd love to hear from you. Reach out and
          let's create something beautiful together.
        </p>
      </div>
    </section>



     <section className="bg-[#f7f3ef] py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">

        {/* Left Side - Form */}
        <div>
          <h2 className="text-4xl font-serif mb-8">
            Send Us a <span className="italic">Message</span>
          </h2>

          <form className="space-y-5">

            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="John Smith"
                className="border p-3 w-full"
              />

              <input
                type="email"
                placeholder="john@example.com"
                className="border p-3 w-full"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="+1 (555) 000-0000"
                className="border p-3 w-full"
              />

              <select className="border p-3 w-full">
                <option>Select a service</option>
                <option>Web Design</option>
                <option>Branding</option>
                <option>Development</option>
              </select>
            </div>

            <select className="border p-3 w-full">
              <option>Select budget range</option>
              <option>$500 - $1000</option>
              <option>$1000 - $5000</option>
              <option>$5000+</option>
            </select>

            <textarea
              rows="5"
              placeholder="Tell us about your project..."
              className="border p-3 w-full"
            ></textarea>

            <button className="bg-black text-white px-6 py-3 flex items-center gap-2 hover:bg-gray-800">
              SEND MESSAGE →
            </button>
          </form>
        </div>

        {/* Right Side - Contact Info */}
        <div>
          <h2 className="text-4xl font-serif mb-8">
            Contact <span className="italic">Information</span>
          </h2>

          <div className="space-y-8">

            <div className="flex gap-4">
              <MapPin className="text-yellow-600" />
              <div>
                <h4 className="font-semibold">Visit Our Studio</h4>
                <p className="text-gray-600">
                  123 Design Avenue <br /> New York, NY 10001
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Phone className="text-yellow-600" />
              <div>
                <h4 className="font-semibold">Call Us</h4>
                <p className="text-gray-600">
                  +1 (212) 555-0123 <br />
                  +1 (212) 555-0124
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Mail className="text-yellow-600" />
              <div>
                <h4 className="font-semibold">Email Us</h4>
                <p className="text-gray-600">
                  hello@indess.com <br />
                  projects@indess.com
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Clock className="text-yellow-600" />
              <div>
                <h4 className="font-semibold">Office Hours</h4>
                <p className="text-gray-600">
                  Mon - Fri: 9:00 AM - 6:00 PM <br />
                  Sat: By Appointment
                </p>
              </div>
            </div>

          </div>

          {/* Social Icons */}
          <div className="mt-10">
            <p className="text-sm tracking-widest mb-4">FOLLOW US</p>

            <div className="flex gap-4">
              <div className="border p-2">IG</div>
              <div className="border p-2">FB</div>
              <div className="border p-2">IN</div>
              <div className="border p-2">TW</div>
            </div>
          </div>

        </div>
      </div>
    </section>
    


    <section className="bg-[#f7f3ef] py-20 px-6 ">
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-sm tracking-[4px] text-[#caa16a] mb-2">FAQ</p>
          <h2 className="text-4xl font-serif">
            Common <span className="italic">Questions</span>
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 bg-white p-6 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-lg font-medium mb-2">{faq.question}</h3>

              {openIndex === index && (
                <p className="text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>

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
