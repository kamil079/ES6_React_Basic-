import React, { Fragment } from "react";
import person from "./data/person";

let personInfo = (
    <Fragment>
        <h1>{person.title} {person.firstName} {person.lastName}</h1>
        <span>{person.age}</span>
    </Fragment>
);

function App() {
    return <>{personInfo}</>;
}

export default App;
