import React from "react";

const redDiv = <div />;
const greenDiv = <div />;
const blueDiv = <div />;

let height = {
    height: '100px'
}

let red = {
    background: 'red'
};

let green = {
    background: 'green'
};

let blue = {
    background: 'blue'
};  


function App() {
    return (
        <>
            {redDiv}
            {greenDiv}
            {blueDiv}
        </>
    );
}

export default App;
