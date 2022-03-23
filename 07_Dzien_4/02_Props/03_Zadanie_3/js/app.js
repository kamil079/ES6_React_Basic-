import React from "react";

let numbers = [1, 2, 3];

let sum = numbers.reduce((p,c) => p + c);

let Summary = () => {
    return sum;
};


export default function App() {
    return <Summary />;
}
