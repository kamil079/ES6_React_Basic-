let generateRandomNumbers = (min,max) => {
    let numbers = [];

        for(let i = 0; i<6; i++) {
            numbers.push(Math.floor(Math.random() * (max - min + 1) + min));
        };
        let [a, ,b] = numbers
        console.log(a,b);
    return numbers;

}

console.log(generateRandomNumbers(0,5));
