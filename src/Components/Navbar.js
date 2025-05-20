import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="container nav-container py-3">
      <div className="row gx-3 align-items-center text-white text-uppercase fw-bold text-center text-md-start w-100">
        <div className="col-12 col-md-4 text-start unclickable mb-2 mb-md-0">
          Developer
        </div>
        <div className="col-12 col-md-4 text-center unclickable mb-2 mb-md-0">
          Programmer
        </div>
        <div className="col-12 col-md-4 text-end unclickable">
          Designer
        </div>
      </div>
    </div>
  );
};

export default Navbar;
