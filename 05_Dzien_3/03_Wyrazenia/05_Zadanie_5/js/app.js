let a = parseFloat(prompt("Podaj liczbe A:"));
let b = parseFloat(prompt("Podaj liczbe B:"));
let oper = prompt("Podaj znak operacji:");

let calc = (A, B, OP) => {
    let res;
    switch (OP) {
        case "+":
            res = <h1>Wynik to {A + B}</h1>;
            break;
        case "-":
            res = <h2>Wynik to {A - B}</h2>;
            break;
        case "*":
            res = <h3>Wynik to {A * B}</h3>;
            break;
        case "/":
            res = <h4>Wynik to {A / B}</h4>;
            break;
        default:
            res = console.log("wrong values or operation!");
    }
    return res;
};

function App() {
    return calc(a, b, oper);
}

export default App;
