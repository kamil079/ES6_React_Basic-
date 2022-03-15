import React from "react";
import ReactDOM from "react-dom";
import person from "./data/person";

function objLi() {
  let ulEl = document.createElement('ul');
  let liEl = document.createElement('li');
  for(let el in person) {
      liEl.innerText = el
  }
  ulEl.append(liEl);
  
}

ReactDOM.render(
  <h1>Hello, World!</h1>,
  document.getElementById("app")
);
