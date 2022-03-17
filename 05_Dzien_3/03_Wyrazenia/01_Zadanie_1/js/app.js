import React from "react";

let firstNr = prompt("Podaj pierwszą liczbę:");
let secondNr = prompt("Podaj drugą liczbę:");
let str = parseFloat(firstNr) + parseFloat(secondNr);

function App() {
    return <h1>Hello, World! This is from summary of prompt values {str}</h1>;
}

export default App;
