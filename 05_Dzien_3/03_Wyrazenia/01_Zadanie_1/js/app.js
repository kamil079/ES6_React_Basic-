import React from "react";
import ReactDOM from "react-dom";

let firstNr = prompt('Podaj pierwszą liczbę:');
let secondNr = prompt('Podaj drugą liczbę:');


ReactDOM.render(
  <h1>Hello, World! This is from summary of prompt values - {parseFloat(firstNr + secondNr)}</h1>,
  document.getElementById("app")
);
