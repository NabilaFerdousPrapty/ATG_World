import React from "react";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Link } from "react-router";

function NavbarComponent() {
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary"
      sticky="top" // Makes the Navbar stick to the top when scrolling
    >
      {/* Use fluid container for full-width */}
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
        <Navbar.Toggle aria-controls="navbarScroll" />

        {/* Collapsible Content */}
        <Navbar.Collapse id="navbarScroll">
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 px-3"
              aria-label="Search"
            />
            
          </Form>
          {/* Navigation Links */}
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Link className="text-dark text-decoration-none" to="/">
              Create account. <span className="text-primary">It’s free!</span>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
