import React from "react";

import NasaLogo from "../img/logo.png";

const Header = () => {
  return (
    <div className="logo-container">
      <img className="logo" src={NasaLogo} alt="Nasa's logo" />
    </div>
  );
};

export default Header;