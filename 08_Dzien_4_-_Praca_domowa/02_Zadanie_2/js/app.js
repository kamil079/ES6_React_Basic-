import React from 'react';
import person from './data/person';

let PersonBox = ({props}) => {
    return (
        <>
            <h1>{person.name} {person.surname}</h1>
            <h2>{person.jobTitle}</h2>
            <p>{person.phone}</p>
        </>
    )
}

export default function App() {
    return <PersonBox name={person.name} surname={person.surname} jobTitle={person.jobTitle} phone={person.phone}/>
}