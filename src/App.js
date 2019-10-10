import React from "react";
import Header from "./Components/header";
import Data from "./Components/data";
import "./App.css";
import Nasa from "../src/img/nasa.png"



function App() {
  

  return (
    <div className="App">
      <div className="container">
        <section className="headerBox">
          <Header />
        </section>
        <section className="cntrBox">
          <Data />
          <img className="nasa" src={Nasa} alt="Nasa" />
        </section>
      </div>
    </div>
  );
}

export default App;
