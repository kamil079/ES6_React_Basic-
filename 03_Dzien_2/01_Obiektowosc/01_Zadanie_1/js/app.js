class Vehicle {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}


class Boat extends Vehicle {
    constructor(name, move) {
        super(name);
        this.move = move;
    }
    getMoving() {
        return super.getName() + " " + this.move;
    }
}

class Car extends Vehicle {
    constructor(name, move) {
        super(name);
        this.move = move;
    }
    getMoving() {
        return super.getName() + " " + this.move;
    }
}

class Plane extends Vehicle {
    constructor(name, move) {
        super(name);
        this.move = move;
    }
    getMoving() {
        return super.getName() + " " + this.move;
    }
}

let boat = new Boat("jetski", "swim");
let car = new Car("BMW", "drive");
let plane = new Plane("F-16", "fly");

console.log(boat);
console.log(boat.getMoving());
console.log(car);
console.log(car.getMoving());
console.log(plane);
console.log(plane.getMoving());