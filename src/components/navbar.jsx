import React from "react";
import logo from "../assets/images/logo-2.png";

const Navbar = () => {
  return (
    <div className="row m-0 p-0 justify-content-between p-5">
      <div className="col-2">
        <img src={logo} alt="logo" />
      </div>
      <div className="w-auto rounded-circle bg-white p-3 pt-2 pb-2 m-0">
        <i class="bi bi-moon m-0 p-0 fs-4"></i>
      </div>
    </div>
  );
};

export default Navbar;
