import React, { useState } from "react";
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarToggler,
  MDBNavbarLink,
  MDBContainer,
  MDBIcon,
  MDBCollapse,
  MDBBtn,
} from "mdb-react-ui-kit";

export default function App() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <header>
      <div
        id="intro-example"
        className="text-center bg-image sectionHeight min-vh-100"
        style={{
          backgroundImage: "url('/src/assets/hero.png')",
        }}
      >
        <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}>
          <div className="d-flex justify-content-start align-items-center h-100">
            <div
              className="text-white text-start"
              style={{
                marginLeft: window.innerWidth >= 992 ? "80px" : "0",
              }}
            >
              <h1 className="mb-3 fs-1 fs-md-2 fs-lg-1">
                Computer Engineering
              </h1>
              <h5 className="mb-4 fs-6 fs-md-5 fs-lg-4">
                142,765 Computer Engineers follow this
              </h5>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
