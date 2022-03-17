import React from "react";

let yourBirth = prompt('Podaj rok urodzenia:');
let today = new Date().getFullYear();

function App() {
  return <h1>Twój wiek to {parseFloat(yourBirth)}, a różnica to {parseFloat(today) - parseFloat(yourBirth)}</h1>
} 

export default App;
