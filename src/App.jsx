import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Services from "./components/Services";
import DigitalTools from "./components/DigitalTools";
import GlobalNetwork from "./components/GlobalNetwork";
import Quality from "./components/Quality";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans text-gray-800">
      <Header />
      <Hero />
      <Features />
      <Services />
      <DigitalTools />
      <GlobalNetwork />
      <Quality />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
