class Duck {
    constructor(type) {
        this.type = type;
    }
    sound() {
        console.log('Quack quack!')
    }
    swim() {
        console.log("I'm swimming..")
    }
    print() {
        console.log(`Looks like ${this.type}!`)
    }
}

let donaldDuck = new Duck('ordinary duck');
donaldDuck.sound();
donaldDuck.swim();
donaldDuck.print();