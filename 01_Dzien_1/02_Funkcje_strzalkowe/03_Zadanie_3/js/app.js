let runInterval = (n) => {
    let counter = 0;

    let ineravl = setInterval(() => {
        if (n === undefined) {
            n = 8;
        }
        counter++;

        if (counter === n) {
            clearInterval(ineravl);
        }
        console.log("hello");
    }, 500);
};

let random = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
runInterval(random);
