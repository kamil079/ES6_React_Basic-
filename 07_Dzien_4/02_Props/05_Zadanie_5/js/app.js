import React, { Component } from "react";

class Menu extends Component {
    render() {
        const { list } = this.props;
        return (
            <ul>
                {list.map((el,i) => (
                    <li key={i}>
                        <a href={el.url}>{el.text}</a>
                    </li>
                ))}
            </ul>
        );
    }
}

let list = [
    {
        url: "/",
        text: "Strona główna",
    },
    {
        url: "/blog",
        text: "Blog",
    },
    {
        url: "/cennik",
        text: "Cennik",
    },
    {
        url: "/kontakt",
        text: "Kontakt",
    },
];

export default function App() {
    return <Menu list={list} />;
}
