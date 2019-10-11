import React from "react";
import styled from "styled-components";
import nasaLogo from "../img/logo.png";

const LogoContainer = styled.div`
display:flex;
padding: 3%;
`;

const Logo = styled.img`
  width: 24%;
`;

const HeadH1 = styled.h1`
color: white;
font-size: 3rem;
`;

const Header = () => {
  return (
    <LogoContainer>
      <Logo src={nasaLogo} alt="Nasa's logo" />
      <HeadH1>Photo of the Day</HeadH1>
    </LogoContainer>
  );
};

export default Header;