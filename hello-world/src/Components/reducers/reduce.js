const array = [1, 2, 3, 4, 5];

const reducer = (accumulator, currentValue) => accumulator + currentValue;

const result = array.reduce(reducer, 2);

console.log(result); // 17

const evenReducer = (accumulator, currentValue) => {
  if (currentValue % 2 === 0) {
    accumulator["even"].push(currentValue);
  } else {
    accumulator["odd"].push(currentValue);
  }
  return accumulator;
};

const evenResult = array.reduce(evenReducer, {
  even: [],
  odd: [],
});

console.log(evenResult);
