import React from "react";

let ShopItemHeader = ({title, image}) => {
    return (
        <header>
            <h1>{title}</h1>
            <img src={image} alt='mac'/>
        </header>
    );
};

let ShopItemDescription = ({description}) => {
    return (
        <article>
            <p>{description}</p>
        </article>
    );
};

let ShopItemPricing = ({price}) => {
    return (
        <footer>
            Cena: {price} zł
            <button>Kup!</button>
        </footer>
    );
};

let ShopItem = ({ item }) => {
    return (
        <section>
            <ShopItemHeader title={item.title} image={item.image} />
            <ShopItemDescription description={item.description} />
            <ShopItemPricing price={item.price} />
        </section>
    );
};

let item = {
    title: "MacBook Pro",
    image: "https://bit.ly/2EEtduD",
    description:
        "Moc i mobilność – MacBook Pro wyraźnie podnosi tu poprzeczkę. Teraz możesz jeszcze szybciej realizować swoje pomysły. Pomogą Ci w tym wydajne procesory i układy pamięci, zaawansowana grafika, błyskawicznie działająca pamięć masowa i inne doskonałe rozwiązania.",
    price: 9999,
};

export default function App() {
    return (
        <>
            <ShopItem item={item} />
        </>
    );
}
