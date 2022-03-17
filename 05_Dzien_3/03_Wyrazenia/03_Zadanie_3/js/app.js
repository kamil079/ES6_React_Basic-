import Person from "./data/person";

function App() {
    let tab = [];
    for (let info in Person) {
        tab.push(<li>{Person[info]}</li>);
    }
    return <ul>{tab}</ul>;
}

export default App;
