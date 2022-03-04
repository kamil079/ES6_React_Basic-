class Vehicle {
    constructor(name, move) {
        this.name = name;
        this.move = move;
    }
    getName() {
        return this.name;
    }
}

class Boat extends Vehicle {}
class Car extends Vehicle {}
class Plane extends Vehicle {}

let boat = new Boat("jetski", "swim");
let car = new Car("BMW", "drive");
let plane = new Plane("F-16", "fly");

console.log(boat);
console.log(car);
console.log(plane);
