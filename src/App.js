import React from "react";
import Header from "./Components/header";
import Data from "./Components/data";
import "./App.css";
import Nasa from "../src/img/nasa.png";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  justify-content: space-evenly;
  align-items: center;
`;

const CntrBox = styled.div`
  width: 80%;
  background: white;
  border-radius: 20px;
  margin:0 0 5% 0;
`;

const NasaTag = styled.img`
  width: 50%;
  margin: 2%;
`;


function App() {
  

  return (
    <div className="App">
      <Container>
          <Header />
        <CntrBox>
          <Data />
          <NasaTag src={Nasa} alt="Nasa" />
        </CntrBox>
      </Container>
    </div>
  );
}

export default App;

// className="APOD"