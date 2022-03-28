import React from "react";
import products from "./data/products";

let ProductList = ({ props }) => {
    let item = products.map((el) => {
        return (
            <div>
                <p key={el.code}>
                    {el.name} {el.price} zł
                </p>
                <button>add to basket</button>
            </div>
        );
    });

    return (
        <>
            <div>{item}</div>
        </>
    );
};

export default function App() {
    return (
        <ProductList
            name={products.name}
            price={products.price}
            code={products.code}
        />
    );
}
