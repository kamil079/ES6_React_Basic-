class Duck {
    constructor(type) {
        this.type = type;
    }
    sound() {
        console.log("Quack quack!");
    }
    swim() {
        console.log("I'm swimming..");
    }
    print() {
        console.log(`Looks like ${this.type}!`);
    }
    fly() {
        console.log("I'm flying...");
    }
}

let donaldDuck = new Duck("ordinary duck");
donaldDuck.sound();
donaldDuck.swim();
donaldDuck.print();

class WildDuck extends Duck {
    constructor(type) {
        super(type);
    }
}

let daffyDuck = new WildDuck("wild duck");
console.log(daffyDuck);
daffyDuck.print();
daffyDuck.sound();
daffyDuck.swim();

class MallarDuck extends Duck {
    constructor(type) {
        super(type);
    }
}

let daisyDuck = new MallarDuck("mallard");
console.log(daisyDuck);
daisyDuck.print();
daisyDuck.sound();
daisyDuck.swim();

console.log(donaldDuck);
donaldDuck.fly();
console.log(daffyDuck);
daffyDuck.fly();
console.log(daisyDuck);
daisyDuck.fly();

class RubberDuck extends Duck {
    constructor(type) {
        super(type);
    }
    fly() {
        console.log("Rubber duck can't fly!");
    }
}

let howardTheDuck = new RubberDuck('rubber');
console.log(howardTheDuck);
howardTheDuck.fly();
howardTheDuck.print();
howardTheDuck.sound();
howardTheDuck.swim();

