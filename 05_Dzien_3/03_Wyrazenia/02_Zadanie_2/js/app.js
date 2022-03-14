import React from "react";
import ReactDOM from "react-dom";

let bornPrompt = prompt('Podaj rok urodzenia:');
let today = new Date();
let yr = today.getFullYear();


ReactDOM.render(
  <h1>Użytkownik ma {today - parseFloat(yr)}</h1>,
  document.getElementById("app")
);
