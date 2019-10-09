import React, {useState, useEffect} from "react";
import Header from "./Components/header";
import "./App.css";


function App() {
  const [photo, setPhoto] = useState()
  return (
    <div className="App">
      <div className="container">
        <section className="headerBox">
          <Header />

        </section>
        <section className="cntrBox">
          <p>This is some text</p>



        </section>
        
        {/* <p>
          Read through the instructions in the README.md file to build your NASA
          app! Have fun 🚀!
        </p> */}


      </div>
      <footer>
        <h4>Copyright 2019</h4>
      </footer>
    </div>
  );
}

export default App;
