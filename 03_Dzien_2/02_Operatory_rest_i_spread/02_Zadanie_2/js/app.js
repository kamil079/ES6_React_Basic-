let getAverage = (...nrs) => {
    return nrs.reduce((p, c) => p + c) / nrs.length;
};

console.log(getAverage(1,2,3));
