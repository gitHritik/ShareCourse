import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Courses from "./components/Courses";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Reviews from "./components/Reviews";

const App = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url("/images/bg1.png")`,
        }}
      >
        <Navbar />
        <Home />
      </div>
      <About />
      <Courses />
      <Reviews />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
