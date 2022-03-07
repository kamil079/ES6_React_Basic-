let saySomething = (dude) => {
  let { name, age, profession } = dude;

  return `Cześć mam na imię ${name}, mam ${age} lata i moim zajęciem jest ${profession}".`;
};

const wally = {
  name: "Wally",
  age: 2,
  profession: "naprawianie innych robotów",
};

console.log(saySomething(wally));
