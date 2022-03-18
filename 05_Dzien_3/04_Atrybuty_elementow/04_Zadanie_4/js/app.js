import React from "react";

let frameCol = prompt('type frame color:');

let style = {
    width: '100px',
    height: '100px',
    border: `5px solid ${frameCol}`
}

let res = (frameCol === 'red' || 'green' || 'blue') ? <div style={style}></div> : <h1>wrong color!</h1>;


function App() {
    return (
        <>
            {res}
        </>
    );
}

export default App;
