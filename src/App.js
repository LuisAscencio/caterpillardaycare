import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import "./App.css";
import { AboutUs } from "./components/AboutUs";

function App() {
  return (
    <div>
      {/* <NavBar /> */}
      <AboutUs />
    </div>
  );
}

export default App;
