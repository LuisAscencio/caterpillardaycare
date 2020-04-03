import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Testimonials from "./components/Testimonials";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import "./App.css";
import { AboutUs } from "./components/AboutUs";

function App() {
  return (
    <div>
      <NavBar />
      <AboutUs />
      <Testimonials />
      <Gallery />
      <Contact />
    </div>
  );
}

export default App;
