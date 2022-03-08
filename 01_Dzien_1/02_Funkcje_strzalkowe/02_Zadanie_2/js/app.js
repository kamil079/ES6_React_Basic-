let getSecondMaxNumber = (array) => {
  array.sort((a, b) => b - a);
  let res = array[1];
  return res;
};

const arr = [2, 3, 1, 6, 100, 49, 5, 7, 8, 9];

console.log(getSecondMaxNumber(arr));
