import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Testimonials from "./components/Testimonials";
import Gallery from "./components/Gallery";
import "./App.css";
import { AboutUs } from "./components/AboutUs";

function App() {
  return (
    <div>
      <NavBar />
      <AboutUs />
      <Testimonials />
      <Gallery />
    </div>
  );
}

export default App;
