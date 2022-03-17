let nr1 = parseFloat(prompt("Podaj pierwsza liczbe:"));
let nr2 = parseFloat(prompt("Podaj druga liczbe:"));
let operation = prompt("Podaj znak operacji:");

let res;
    switch (operation) {
        case "+":
            res = <h1>Wynik to {nr1 + nr2}</h1>;
            break;
        case "-":
            res = <h2>Wynik to {nr1 - nr2}</h2>;
            break;
        case "*":
            res = <h3>Wynik to {nr1 * nr2}</h3>;
            break;
        case "/":
            res = <h4>Wynik to {nr1 / nr2}</h4>;
            break;
        default:
            res = console.log("wrong values or operation!");
    }

function App() {
    return res;
}

export default App;
