const foods = [];

class Food {
    constructor(name, protein, carbs, fat) {
        this.name = name;
        this.protein = protein;
        this.carbs = carbs;
        this.fat = fat;
    }
    calories() {
        let totalCalories = this.protein * 4 + this.carbs * 4 + this.fat * 9;
        console.log(totalCalories);
    }
}

class FatFreeFood extends Food {
    constructor(name, protein, carbs, fat) {
        super(name, protein, carbs, fat);
    }
}
class FastFood extends Food {
    constructor(name, protein, carbs, fat) {
        super(name, protein, carbs, fat);
    }
}

let productList = document.querySelector("#products");
let foodNameEl = document.querySelector("#name");
let quanProtein = document.querySelector("#proteins");
let quanCarbs = document.querySelector("#carbs");
let quanFats = document.querySelector("#fat");
let btn = document.querySelector(".btn");

btn.addEventListener("click", (e) => {
    e.preventDefault();

    let foodName = foodNameEl.value;
    let res = parseInt(
        quanProtein.value * 4 + quanCarbs.value * 4 + quanFats.value * 9
    );
    console.log();
    if (res < 250) {
        foodName = new FatFreeFood(
            foodName,
            quanProtein.value,
            quanCarbs.value,
            quanFats.value
        );
    } else {
        foodName = new FastFood(
            foodName,
            quanProtein.value,
            quanCarbs.value,
            quanFats.value
        );
    }

    let newLi = document.createElement("li");
    newLi.innerText = `${foodNameEl.value} proteins ${quanProtein.value}g, carbs ${quanCarbs.value}g, fats ${quanFats.value}g, total calories: ${res}kcal`;
    productList.append(newLi);

    foods.push(foodName);
    console.log(foods);
});
