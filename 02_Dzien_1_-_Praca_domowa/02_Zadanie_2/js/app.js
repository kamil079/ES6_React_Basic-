function Weather(arr) {
    this.array = arr;
}

Weather.prototype.getAvgTemperature = function () {
    let res = document.querySelector("#avg-temp");
    res.innerText = this.array.reduce((p, c) => (p + c) / this.array.length);
};

let array = [3, 3];
const day1 = new Weather(array);

day1.getAvgTemperature();
