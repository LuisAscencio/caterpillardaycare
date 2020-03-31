import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Testimonials from "./components/Testimonials";
import "./App.css";
import { AboutUs } from "./components/AboutUs";

function App() {
  return (
    <div>
      <NavBar />
      <AboutUs />
      <Testimonials />
    </div>
  );
}

export default App;
