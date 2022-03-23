import React from "react";

const LikeBox = ({likes}) => {
    return (
        <>
            <div>{likes}</div>
            <button>Like</button>
        </>
    );
};

export default function App() {
    return <LikeBox likes={69}/>;
}