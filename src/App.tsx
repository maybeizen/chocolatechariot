import React from "react";
import "./styles/globals.css";

// Layout Components
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

// Section Components
import Hero from "./components/sections/Hero";
import Menu from "./components/sections/Menu";
import Locations from "./components/sections/Locations";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main>
        <Hero />
        <Menu />
        <Locations />
        <About />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
