const array = [1, 2, 3, 4, 5];

const reducer = (accumulator, currentValue) => accumulator + currentValue;

const result = array.reduce(reducer, 2);

console.log(result); // 17

const evenReducer = (accumulator, currentValue) => {
  currentValue % 2 === 0
    ? accumulator["even"].push(currentValue)
    : accumulator["odd"].push(currentValue);

  return accumulator;
};

const evenResult = array.reduce(evenReducer, {
  even: [],
  odd: [],
});

console.log(evenResult); // { even: [ 2, 4 ], odd: [ 1, 3, 5 ] }

// reduce as map
const mapReducer = (accumulator, currentValue) => {
  accumulator.push(currentValue * 2);

  return accumulator;
};

const mapResult = array.reduce(mapReducer, []);
console.log(mapResult); // [ 2, 4, 6, 8, 10 ]
