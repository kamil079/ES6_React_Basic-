import React, { Component } from "react";

let Header = ({ logo, searchPlaceholder }) => {
    return (
        <header>
            <a href="#">{logo}</a>
            <form>
                <input placeholder={searchPlaceholder} name="s" />
                <button>Search</button>
            </form>
        </header>
    );
};

export default function App() {
    return (
        <Header logo="Your company!" searchPlaceholder="Type some words..." />
    );
}
