import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Link } from "react-router";

function NavbarComponent() {
  // State to manage the collapse behavior
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary w-90 m-auto"
      sticky="top"
      expanded={expanded} // Control collapse state
    >
      <Container fluid>
        {/* Navbar Brand */}
        <Navbar.Brand href="/">
          <img
            src="/src/assets/logo.png"
            alt="Logo"
            className="d-inline-block align-top"
            style={{ height: "20px" }}
          />
        </Navbar.Brand>

        {/* Toggler for Small Screens */}
        <Navbar.Toggle
          aria-controls="navbarScroll"
          onClick={() => setExpanded(expanded ? false : true)} // Toggle collapse state
        />

        {/* Collapsible Content */}
        <Navbar.Collapse id="navbarScroll">
          {/* Centered Form */}
          <Form
            className="d-flex mx-auto text-dark mt-3 mt-lg-0"
            style={{ width: "80%", maxWidth: "400px", borderRadius: "20px" }}
          >
            <Form.Control
              type="search"
              placeholder="Search"
              className="px-3"
              aria-label="Search"
              style={{
                borderRadius: "8px",
              }}
            />
          </Form>

          {/* Navigation Links */}
          <Nav
            className="ms-auto my-3 my-lg-0"
            style={{ gap: "20px", fontSize: "1.1rem" }}
            onClick={() => setExpanded(false)} // Collapse the menu after clicking a link
          >
            <Link
              className="text-dark text-decoration-none"
              to="/"
              style={{ fontWeight: "bold" }}
            >
              Create account. <span className="text-primary">It’s free!</span>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
