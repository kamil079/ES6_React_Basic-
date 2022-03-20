import React from "react";
import people from "./data/people";

let list = (
    
        people.map((el) => {
            console.log(el.id)
            return <div key={el.id}>{el.name} {el.surname}</div>;
        })
    
);

function App() {
    return <div>{list}</div>;
}

export default App;
