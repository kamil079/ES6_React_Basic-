function Weather() {
    this.array = [];
}

Weather.prototype.getAvgTemperature = function (arr) {
    let res = document.querySelector("#avg-temp");
    res.innerText = arr.reduce((p, c) => (p + c) / arr.length);
};

let array = [3, 3];
const day1 = new Weather(array);

day1.getAvgTemperature(array);
