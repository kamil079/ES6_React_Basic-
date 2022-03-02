const products = [
  {
    name: "Fiat Tipo",
    category: "car",
    price: 29900,
    condition: "new",
  },
  {
    name: "MacBook Pro",
    category: "computer",
    price: 9999,
    condition: "new",
  },
  {
    name: "Xiaomi Redmi Note 8",
    category: "phone",
    price: 2399,
    condition: "new",
  },
  {
    name: "Audi A6",
    category: "car",
    price: 23450,
    condition: "used",
  },
  {
    name: "Samsung Galaxy Note 9",
    category: "phone",
    price: 1899,
    condition: "used",
  },
  {
    name: "Seat Leon",
    category: "car",
    price: 66000,
    condition: "new",
  },
  {
    name: "Nike Sneakers",
    category: "shoes",
    price: 345,
    condition: "new",
  },
  {
    name: "Dacia Logan",
    category: "car",
    price: 33500,
    condition: "new",
  },
];

let allCars = document.querySelector("#all-products");
let filteredCars = document.querySelector("#filtered-products");

products.forEach((el) => {
  let oneEl = document.createElement("li");
  let nameEl = document.createElement("strong");
  let infoEl = document.createElement("span");

  nameEl.innerText = `${el.name}`;
  infoEl.innerText = `${el.price} - ${el.condition}`;

  oneEl.append(nameEl);
  allCars.append(oneEl);
});

products.filter((el) => {
  let oneEl = document.createElement("li");
  let nameEl = document.createElement("strong");
  let infoEl = document.createElement("span");

  if (el.category == "car" && el.condition == "new" && el.price < 45000) {
    nameEl.innerText = `${el.name}`;
    infoEl.innerText = `${el.price} - ${el.condition}`;

    oneEl.append(nameEl);
    filteredCars.append(oneEl);
  }
});
