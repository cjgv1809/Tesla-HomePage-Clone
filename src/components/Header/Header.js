import React from "react";
import "./Header.css";
import TeslaLogo from "../../assets/teslaLogoSmall.svg";

const Header = ({ showMenu, toggleMenu }) => {
  return (
    <div className="header">
      <div className="header__logo">
        <img src={TeslaLogo} alt="Tesla Logo" />
      </div>

      <div
        className="header__center"
        onClick={toggleMenu}
        id={showMenu ? "hidden" : ""}
      >
        <p onClick={toggleMenu}>Model S</p>
        <p onClick={toggleMenu}>Model 3</p>
        <p onClick={toggleMenu}>Model X</p>
        <p onClick={toggleMenu}>Model Y</p>
        <p onClick={toggleMenu}>Solar Roof</p>
        <p onClick={toggleMenu}>Solar Panel</p>
        <p onClick={toggleMenu}>Shop</p>
        <p onClick={toggleMenu}>Tesla Account</p>
      </div>

      <div className="header__menu">
        <i class="fas fa-bars" onClick={toggleMenu}></i>
      </div>
    </div>
  );
};

export default Header;
