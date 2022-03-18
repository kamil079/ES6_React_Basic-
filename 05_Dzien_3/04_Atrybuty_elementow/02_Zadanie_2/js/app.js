import React from "react";

function genNumber() {
    return Math.round(Math.random() * 9 + 1);
}

let a = genNumber();
let b = genNumber();
let show = parseFloat(
    prompt(`liczba a = ${a}, liczba b = ${b}. Jaki wynik dodawania?`)
);
let sum = a + b;
console.log(sum);

let green = {
    height: "100vh",
    background: "green",
};
let red = {
    height: "100vh",
    background: "red",
};

let res = show === sum ? <div style={green}></div> : <div style={red}></div>;

function App() {
    return <>{res}</>;
}

export default App;
