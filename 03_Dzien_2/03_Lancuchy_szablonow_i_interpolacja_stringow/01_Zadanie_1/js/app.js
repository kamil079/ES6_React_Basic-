const person = {
  name: "Vlad",
  lastName: "Drăculea",
  yearOfBirth: 1431,
  profession: "Lord of Wallachia",
};

let whoAreYou = () => {
  console.log(`My name is ${this.name} ${this.lastName}.
    I am ${this.yearOfBirth} years old.
    My profession is ${this.profession}.`);
};

whoAreYou(person);
