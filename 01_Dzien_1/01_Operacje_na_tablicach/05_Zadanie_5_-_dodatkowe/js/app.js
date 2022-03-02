function randomize(param1, param2, callback) {
    if(typeof callback !== 'function') {
        console.error('error');
    }

  random = Math.floor(Math.random() * (param1 - param2)) + param2;
  callback(random);
};

let foo = (el) => {
    console.log(el);
};

randomize(2, 6, foo);