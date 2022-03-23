import React from "react";

let ShopItemHeader = ({title, image}) => {
    return (
        <header>
            <h1>{title}</h1>
            <img src={image} alt='mac'/>
        </header>
    );
};

let ShopList = ({ item }) => {
    return (
        <div className="shopList">
            {item.map((el, index) => {
                return (
                    <ShopItemHeader key={index} title={el.title} image={el.image} />
                )
            })}
        </div>
    );
};

let item = [
    {
        title: "Mysz komputerowa",
        image: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Red_computer_mouse.jpg",
    },
    {
        title: "Klawiatura",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Computer_keyboard_Danish_layout.svg/1000px-Computer_keyboard_Danish_layout.svg.png",
    },
    {
        title: "Laptop programisty",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Typing_computer_screen_reflection.jpg/640px-Typing_computer_screen_reflection.jpg",
    },
];

export default function App() {
    return (
        <>
            <ShopList item={item} />
        </>
    );
}
