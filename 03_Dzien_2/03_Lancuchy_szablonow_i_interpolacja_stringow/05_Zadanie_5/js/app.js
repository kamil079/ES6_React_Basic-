const button = {
    text: "Send message",
    id: "sendMsg",
    classes: ["btn", "btn-primary"],
    width: 100,
    padding: 20
  };

  let btn = document.querySelector('#buttonContainer');

  let btnInfo = () => {
    console.log(`To jest button.
    Jego szerokość to ${this.width}px.
    Napis, który na nim widnieje to ${this.text}.`);
  }

  btnInfo(button);


let newBtn = document.createElement('button');
newBtn.innerText = button.text;
newBtn.style.width = `${button.width}px`;
newBtn.style.padding = `${button.padding}px`;
newBtn.classList = button.classes;
newBtn.id = button.id;

btn.append(newBtn);