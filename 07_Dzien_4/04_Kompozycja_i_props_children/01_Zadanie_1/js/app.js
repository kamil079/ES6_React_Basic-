import React from "react";

let ParentComponent = () => {
    return <ChildComponent />;
};
let ChildComponent = () => {
    return <GrandchildComponent />;
};
let GrandchildComponent = () => {
    return <h1>works!</h1>;
};

export default function App() {
    return (
        <>
            <ParentComponent />
        </>
    );
}
