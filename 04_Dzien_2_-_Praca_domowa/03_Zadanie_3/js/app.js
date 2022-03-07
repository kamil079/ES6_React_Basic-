let sayHello = (...arr) => {
    arr.forEach(el => console.log(`Hello: ${el}`));
};

sayHello("Ania", "Kasia", "Steve", "Bogumił");
