import React, { Component } from "react";

let AddNumbers = ({ numberA, numberB }) => {
    return <h1>{numberA + numberB}</h1>;
};

class AddNumbers2 extends Component {
    render() {
        const { numberA, numberB } = this.props;
        return <h1>{numberA + numberB}</h1>;
    }
}

let numberA = 2;
let numberB = 9;

export default function App() {
    return (
        <>
            <AddNumbers numberA={numberA} numberB={numberB} />
            <AddNumbers2 numberA={numberA} numberB={numberB} />
        </>
    );
}
