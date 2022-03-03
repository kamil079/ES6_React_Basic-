let getNumbers = (arr) => {
    return arr.map((el) => el * 2).reduce((p, c) => p + c);
};

let array = [2, 2, 3];

console.log(getNumbers(array));
