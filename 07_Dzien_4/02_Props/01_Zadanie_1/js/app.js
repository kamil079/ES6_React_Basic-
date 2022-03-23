import React, { Component } from "react";

let Hello = ({ name, surname }) => {
    return (
        <h1>
            Hello {name} {surname}
        </h1>
    );
};

class Hello2 extends Comment {
    render() {
        const {name, surname} = this.props
        return (
            <h1>
                Hello {name} {surname}
            </h1>
        );
    }
}
let name = "Izabela";
let surname = "Szczepaniec";

export default function App() {
    return (
        <>
            <Hello name={name} surname={surname} />
            <Hello2 name={name} surname={surname} />
        </>
    );
}
