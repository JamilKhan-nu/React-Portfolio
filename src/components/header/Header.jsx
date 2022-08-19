import React from "react";
import CTA from "./CTA";
import "./header.css";
import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I am</h5>
        <h1 className="name">Jamil Khan</h1>
        <h5 className="title text-light">Fullstack Developer</h5>
        <CTA />

        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
