const App = function () {
  this.websites = ["google", "twitter", "facebook"];
  this.links = [];

};

App.prototype.generateLinks = function () {
  this.links = this.websites.map(el => `https://${el}.com`);
};

App.prototype.insertLinks = function () {
  let list = document.querySelector('#menu');

  this.links.forEach(el => {
    let liEl = document.createElement('li');
    let aEl = document.createElement('a');

    aEl.setAttribute('href', `https://${el}.com`);
    liEl.innerText = `https://${el}.com`;

    liEl.append(aEl);

    list.append(liEl);
  });
  
};

const app = new App();
app.generateLinks();
app.insertLinks();

console.log(app.links);
