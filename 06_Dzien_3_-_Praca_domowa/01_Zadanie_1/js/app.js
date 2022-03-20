import React from 'react';

let namePrompt = prompt('podaj swoje imie:');
let agePrompt = parseFloat(prompt('podaj swój wiek'));



let App = () => <div>{namePrompt} ma lat {agePrompt}</div>;

export default App;