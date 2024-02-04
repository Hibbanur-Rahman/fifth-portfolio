import React, { useState } from "react";
import logo from "../assets/images/logo-2.png";
import '../assets/styles/style.css';

const Navbar = ({ isDark, setIsDark }) => { // Receive isDark and setIsDark as props
  const handleClick = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={`row m-0 p-0 justify-content-between p-5 mb-5 ${isDark ? 'navbar-dark' : 'navbar-light'}`}>
      <div className="col-2">
        <img src={logo} alt="logo" />
      </div>
      <div className={`w-auto rounded-circle ${isDark ? 'bg-dark' : 'bg-white'} p-3 pt-2 pb-2 m-0`} onClick={handleClick}>
        <i className={`bi bi-moon m-0 p-0 fs-4 ${isDark ? 'text-white' : 'text-dark'}`}></i>
      </div>
    </div>
  );
};

export default Navbar;
