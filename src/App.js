import React, { useState, useEffect } from "react";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";

//Material
import PaperSheet from './materialComponents/Paper';





const Frase = ({frase, getQuote}) => {
  return(
    <PaperSheet getQuote={getQuote} frase={frase}/>
  )
}

function App() {
  const [frase, setFrase] = useState({});

  const consultarApi = async () => {
    const resultado = await axios(
      "https://breaking-bad-quotes.herokuapp.com/v1/quotes"
    );
    setFrase(...resultado.data);
  };

  useEffect(() => {
    consultarApi();
  }, []);

  const getQuote = () => {
    consultarApi()
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <Frase getQuote={getQuote} frase={frase}/>
      </header>
    </div>
  );
}

export default App;
