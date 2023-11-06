import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [advice, setAdvice] = useState("");
  const baseUrl = `https://api.adviceslip.com/advice`;

  useEffect(() => {
    fetchAdvice();
  }, []);

  const fetchAdvice = () => {
    axios
      .get(baseUrl)
      .then((response) => {
        const { advice } = response.data.slip;
        setAdvice(advice);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="container">
      <div className="card">
        <div className="heading">
          <h1>{advice}</h1>
        </div>
        <button className="button" onClick={() => fetchAdvice()}>
          More Advice
        </button>
      </div>
    </div>
  );
};

export default App;
