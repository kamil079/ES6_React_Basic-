import React from "react";
import people from "./data/people";
import '../css/style.css';

let peopleInfo = people.map((el, avatar, title, name, surname, bio) => {
    return (
        <div key={el.id} className="person">
            <img src={el.avatar}></img>
            <div className="info">
                <h1>{el.title + el.name + el.surname}</h1>
                <p>{el.bio}</p>
            </div>
        </div>
    );
});

function App() {
    return <>{peopleInfo}</>;
}

export default App;
