import React from "react";
import products from "./data/products";

let ProductList = ({ props }) => {
    let btn = <button>add to basket</button>;

    let product = products.map((el) => {
        <p key={el.code}>
            {el.name} {el.price} {el.code}
        </p>;
    });
    return (
        <>
            <div>{product} {btn}</div>
        </>
    );
};

export default function App() {
    return <ProductList code={products.code} />;
}
