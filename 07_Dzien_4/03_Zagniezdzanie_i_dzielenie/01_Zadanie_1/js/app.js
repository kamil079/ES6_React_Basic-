import React from "react";

let CurrencyConverter = ({ from, to, value, rate }) => {
    return (
        <div>
            <strong>{value}</strong> {from} = <strong> {Math.round(value * rate * 100) / 100} </strong>{to}
        </div>
    );
};

export default function App() {
    return (
        <>
            <CurrencyConverter from="EUR" to="USD" value={200} rate={1.12275} />
            <CurrencyConverter from="PLN" to="USD" value={400} rate={0.29383} />
            <CurrencyConverter from="USD" to="PLN" value={500} rate={2.3434} />
        </>
    );
}
