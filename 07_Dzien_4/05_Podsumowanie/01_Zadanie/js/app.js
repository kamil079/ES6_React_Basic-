import React from "react";
import items from "./data/products";

let ReceiptHeader = () => {
    return (
        <thead>
            <tr>
                <td>Nazwa</td>
                <td>Cena</td>
                <td>Ilość</td>
                <td>Łączna cena</td>
            </tr>
        </thead>
    );
};

let ReceiptItems = ({ items }) => {
    return (
        <tbody>
            <tr>
                {items.map((el) => {
                    return (
                        <ReceiptItem
                            key={el.code}
                            name={el.name}
                            single_price={el.single_price}
                            qty={el.qty}
                        />
                    );
                })}
            </tr>
        </tbody>
    );
};

let ReceiptItem = ({ name, single_price, qty }) => {
    return (
        <tr>
            <td>{name}</td>
            <td>{single_price}</td>
            <td>{qty}</td>
            <td>{(single_price * qty).toFixed(2)} zł</td>
        </tr>
    );
};

let price = items.map((el) => el.single_price);
let quantity = items.map((el) => el.qty);
let sumArr = price.map(function (el, i) {
    return el * quantity[i];
});
let res = sumArr.reduce((p,c) => p + c);
console.log(res);


let ReceiptFooter = () => {
    return (
        <tfooter>
            <tr>
                <td>RAZEM</td>
                <td>-</td>
                <td>-</td>
                <td>{res}</td>
            </tr>
        </tfooter>
    );
};

let Receipt = ({ items }) => {
    return (
        <table className="table">
            <ReceiptHeader />
            <ReceiptItems items={items} />
            <ReceiptFooter items={items} />
        </table>
    );
};

export default function App() {
    return <Receipt items={items} />;
}
