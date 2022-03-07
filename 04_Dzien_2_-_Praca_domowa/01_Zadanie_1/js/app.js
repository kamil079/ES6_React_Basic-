class Insect {
    constructor(name) {
        this.name = name;
    }
};

class Centipede extends Insect {
    constructor(name, legs) {
        super(name)
        this.legs = legs;
    }
    getLegs() {
        console.log(`Cześć jestem ${this.name} jestem stonogą i mam ${this.legs}`);
    }
};

class Spider extends Insect {
    constructor(name, legs) {
        super(name)
        this.legs = legs;
    }
    getLegs() {
        console.log(`Cześć jestem ${this.name} jestem pająkiem i mam ${this.legs}`);
    }
};

let lucy = new Centipede('Lucy', 20);
let mike = new Spider('Mike', 8);

lucy.getLegs();
mike.getLegs();

let area = document.querySelector('.card-body');
let pEl = document.createElement('p');
