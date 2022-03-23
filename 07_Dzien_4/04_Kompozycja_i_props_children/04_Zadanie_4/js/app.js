import React from "react";

let ChatHeader = () => {
    return (
        <header>
            <h1>Chat prywatny</h1>
        </header>
    );
};

let ChatMessages = () => {
    return (
        <ul>
            <ChatMessage nr={1}/>
            <ChatMessage nr={2}/>
            <ChatMessage nr={3}/>
        </ul>
    );
};

let ChatMessage = ({nr}) => {
    return (
        <>
            <li>Wpis z chatu {nr}</li>
        </>
    );
};

let NewChatMessage = () => {
    return (
        <footer>
                <form>
                    <input type="text" />
                    <button>Wyślij</button>
                </form>
            </footer>
    );
};

function Chat(props) {
    return (
        <section className="chat">
            <ChatHeader/>
            <ChatMessages/>
            <NewChatMessage/>
        </section>
    );
}

export default function App(props) {
    return <Chat />;
}
