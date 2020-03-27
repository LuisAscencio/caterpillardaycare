import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import "./App.css";

import PhotoRoll from "./components/PhotoRoll";

function App() {
  return (
    <div className=".all">
      <Navbar sticky="top" variant="dark" bg="dark" expand="lg">
        <Navbar.Brand>
          <div>Caterpillar Daycare</div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Dashboard</Nav.Link>
            <Nav.Link href="/visitsvault"> Visits vault</Nav.Link>
            <Nav.Link href="/newvisit">New visit</Nav.Link>

            {/* <Nav.Link href="/login">
              <FaPowerOff size="20px" />
            </Nav.Link> */}
            {/* <Nav.Link href="/signup">Sign up</Nav.Link> */}

            {/* <Button
          onClick={() => {
            app.auth().signOut();
            // localStorage.clear();
            console.log(localStorage);
          }}
        >
          Sign Out
        </Button> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <PhotoRoll />
    </div>
  );
}

export default App;
