let showAnimal = () => {

    console.log(`Kot ${cat.name} ma ${catAge} lat i robi ${cat.getVoice()}`);    

};

const cat = {
    name: "Mruczek",
    age: 10,
    getVoice: () => "miau miau"
  };
let {age: catAge} = cat;

showAnimal(cat);



