const person = {
  name: "Alice",
  age: 30,
  address: {
    city: "New York",
    state: "NY",
    country: "USA",
  },
};

const {
  name,
  age,
  address: { city, state },
} = person;

console.log(name); // 'Alice'
console.log(age); // 30
console.log(city); // 'New York'
console.log(state); // 'NY'

const obj = { a: 1, b: 2, c: 3 };
const { a, ...rest } = obj;
console.log(a); // 1
console.log(rest); // { b: 2, c: 3 }
