import React from "react";
import Header from "./Components/header";
import Image from "../src/Components/image";
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
          <Image />
          <div>
            <img className="nasa" src={Nasa} alt="Nasa" />
          </div>


        </section>
      </div>
      <footer>
        <h4>Nasa Photo of the Day Copyright 2019</h4>
      </footer>
    </div>
  );
}

export default App;
