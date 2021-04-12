//React
import React from "react";

//Style
import "./style.css";

//Image
import TeslaLogo from "../../assets/teslaLogoSmall.svg";

export default function Header() {
  return (
    <div className="headerContainer">
      <div className="headerLogo">
        <img className="logo" src={TeslaLogo} alt="Tesla Logo" />
      </div>

      <div className="headerCenter">
        <p>Model S</p>
        <p>Model 3</p>
        <p>Model X</p>
        <p>Model Y</p>
        <p>Solar Roof</p>
        <p>Solar Panels</p>
      </div>

      <div className="headerRight">
        <p>Shop</p>
        <p>Tesla Account</p>
      </div>
    </div>
  );
}
