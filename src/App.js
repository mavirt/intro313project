import logo from './logo.svg';
import './App.css';
import Box from "./components/Box";
import React from "react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />



        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>


        <Box
            name={"Alex"}
            color={"Red"}
            yearsOld={14}
            />

        <Box
            name={"Sarah"}
            color={"Blue"}
            yearsOld={21}
            />

        <Box
            name={"Luc"}
            color={"Aqua"}
            yearsOld={24}
            />





      </header>
    </div>
  );
}

export default App;

