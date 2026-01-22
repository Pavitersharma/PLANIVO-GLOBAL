import React from "react";
import Hero from "../component/Hero";
import Header from "../component/Header";
import About from "../component/About";
import Services from "../component/Services";

export default function Homepage() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services/>
    </>
  );
}
