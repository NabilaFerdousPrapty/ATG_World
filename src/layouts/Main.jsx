import React from "react";
import { Button, Stack } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "../pages/Home";
import About from "../pages/About";
import Auth from "../layouts/Auth";
import Error from "../pages/Error"; // Ensure this exists or create it.
import { Route, Routes } from "react-router";
import NavbarComponent from "../components/Navbar"; 
import "../index.css";  
import index from './../../node_modules/@emotion/is-prop-valid/dist/is-prop-valid.esm';
const Main = () => {
  return (
    <div>
      {/* Navbar Component */}
      <NavbarComponent />

      {/* Routes Component */}
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="auth" element={<Auth />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default Main;
