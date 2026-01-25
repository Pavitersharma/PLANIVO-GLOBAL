import React from "react";
import Hero from "../component/Hero";
import Header from "../component/Header";
import About from "../component/About";
import Services from "../component/Services";
import Portfolio from "../component/Portfolio";
import Testimonials from "../component/Testimonials";
import ContactFooter from "../component/ContactFooter";

export default function Homepage() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services/>
      <Portfolio/>
      <Testimonials/>
      <ContactFooter/>
    </>
  );
}
