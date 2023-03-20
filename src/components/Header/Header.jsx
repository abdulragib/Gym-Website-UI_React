import React, { useState } from "react";
import "./Header.css";
import logo from "../../assets/logo.png";
import Bars from "../../assets/bars.png";

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="header">
      <img src={logo} alt="img" className="logo"></img>
      {menuOpen === false && mobile === true ? (
        <div
          style={{
            backgroundColor: "var(--appColor)",
            padding: "0.5rem",
            borderRadius: "5px",
          }}

          onClick={()=>setMenuOpen(true)}
        >
          <img
            src={Bars}
            alt="Menu"
            style={{ width: "1.5rem", height: "1.5rem" }}
          />
        </div>
      ) : (
        <ul className="header-menu">
          <li onClick={()=>setMenuOpen(false)}>Home</li>
          <li onClick={()=>setMenuOpen(false)}>Programs</li>
          <li onClick={()=>setMenuOpen(false)}>Why us</li>
          <li onClick={()=>setMenuOpen(false)}>Plans</li>
          <li onClick={()=>setMenuOpen(false)}>Testimonials</li>
        </ul>
      )}
    </div>
  );
};

export default Header;
