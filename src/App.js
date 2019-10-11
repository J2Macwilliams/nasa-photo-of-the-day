import React from "react";
import HeaderBox from "./Components/header";
import Data from "./Components/data";
import "./App.css";
import nasa from "../src/img/nasa.png";
import styled from "styled-components";
import background from "./img/MilkyWay.jpg";

const BackgroundImage = styled.div`
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 0;
`;

const Container = styled.div`
  
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  justify-content: space-evenly;
  align-items: center;
  
`;

const CntrBox = styled.div`
  width: 70%;
  background: white;
  border-radius: 20px;
  margin:0 0 5% 0;
  text-align: center;
  
`;

const NasaTag = styled.img`
  width: 50%;
  margin: 2%;
`;

function App() {
  

  return (
    <BackgroundImage>
      <Container>
              <HeaderBox />
            <CntrBox>
              <Data />
              <NasaTag src={nasa} alt="Nasa" />
            </CntrBox>
      </Container>
    </BackgroundImage>
  );
}

export default App;

// className="APOD"