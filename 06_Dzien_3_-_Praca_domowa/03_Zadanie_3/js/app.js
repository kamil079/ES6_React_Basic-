import React from "react";

let size = "200px";

let element = (
    <div style={{ width: size, height: size, background: "blue" }}></div>
);

let App = () => {
    return <>{element}</>;
};

export default App;
