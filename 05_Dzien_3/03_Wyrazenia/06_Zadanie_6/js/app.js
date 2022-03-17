import animals from "./data/animals";

function App() {
    return (
        <section>
            Łączna liczba zwierząt to {animals.length}.<br></br>
            Zwierzęta są następujące:<br></br>
            <span>{animals.map((el) => el + ", ")}</span>
        </section>
    );
}

export default App;
