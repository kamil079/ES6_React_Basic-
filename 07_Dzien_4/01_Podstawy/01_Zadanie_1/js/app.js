import React, { Component } from "react";

const Search = () => {
    return (
        <div>
            <input type="text" placeholder="funkcyjnie"></input>
            <button>Wyszukaj</button>
        </div>
    );
};

class SearchTwo extends Component {
    render() {
        return (
            <div>
                <input type="text" placeholder="klasowo"></input>
                <button>Wyszukaj</button>
            </div>
        );
    }
}

function App() {
    return (
        <>
            <Search />
            <SearchTwo />
        </>
    );
}

export default App;
