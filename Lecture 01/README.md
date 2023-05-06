# Scope in javascript

In JavaScript, scope refers to the set of variables, functions, and objects that are accessible within a particular block of code, and how those entities can be accessed and modified.

There are two types of scope in JavaScript: global scope and local scope.

1. Global scope: Variables declared outside of any function or block have global scope, meaning they can be accessed and modified from any part of the code, including within functions or blocks. Global variables can be accessed using the `window` object in the browser, or the `global` object in Node.js.

```js
const x = 1;

function foo() {
  console.log(x); // 1
}

foo();
```

2. Local scope: Variables declared within a function or block have local scope, meaning they can only be accessed and modified within that function or block. Local variables take precedence over global variables with the same name.

```js
function foo() {
  const x = 1;
  console.log(x); // 1
}

foo();

console.log(x); // Error: x is not defined
```

In addition to these two basic types of scope, JavaScript also has lexical scope. Lexical scope refers to the way that nested functions can access variables declared in their outer scopes, even after the outer functions have returned. This is possible because JavaScript uses a mechanism called closures, which keep the state of a function's local variables even after the function has completed execution.

```js
function outer() {
  const x = 1;

  function inner() {
    console.log(x); // 1
  }

  return inner;
}

const innerFn = outer();
innerFn();
```

In this example, the `inner` function is defined inside the `outer` function, so it has access to the `x` variable declared in the outer function's scope. When `outer` is called and returns the `inner` function, the `inner` function still has access to the `x` variable because of closures.

Understanding scope is an important part of writing effective and maintainable JavaScript code. By properly scoping your variables and functions, you can prevent naming conflicts and make your code more modular and reusable.

# let, const, and var

In JavaScript, `let`, `const`, and `var` are keywords used for declaring variables. Each keyword has different scoping and mutability rules that affect how the variable can be used in your code.

`var` was the original keyword used for declaring variables in JavaScript. It has function scope, meaning that if a variable is declared inside a function using `var`, it is not accessible outside that function. However, if a variable is declared outside of any function using `var`, it becomes a global variable and is accessible throughout the entire script.

```js
function foo() {
  var x = 1;
  console.log(x); // 1
}

console.log(x); // undefined
```

`let` and `const` were introduced in ES6 (ECMAScript 2015) and have block scope, meaning that a variable declared using `let` or `const` is only accessible within the block of code in which it was defined, including nested blocks.

`let` is used to declare variables that can be reassigned a new value later in the code:

```js
let x = 1;
x = 2;
console.log(x); // 2
```

`const` is used to declare variables that cannot be reassigned a new value. Once a `const` variable is assigned a value, it cannot be changed.

```js
const x = 1;
x = 2; // Error: Assignment to constant variable.
```

Note that if you declare a `const` variable that is an object or an array, you can still modify the properties or elements of the object or array, but you cannot reassign the variable itself to a new object or array.

```js
const person = { name: "Alice" };
person.name = "Bob"; // Okay
person = { name: "Charlie" }; // Error: Assignment to constant variable.
```

In general, it is recommended to use `const` whenever possible, and only use `let` when you need to reassign a variable. Avoid using `var` in modern JavaScript, as it has some quirks and can lead to unpredictable behavior in your code.

# Destructuring

## Objects

In JavaScript, object destructuring is a way to extract values from an object and assign them to individual variables, using a concise and expressive syntax.

Here is an example of object destructuring:

```js
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
```

In the example above, we are destructuring the `person` object to extract the values of its properties `name`, `age`, `address.city`, and `address.state`, and assign them to individual variables with the same names.

The syntax for object destructuring is as follows:

```js
const { prop1, prop2, ..., propN } = object;
```

where `prop1`, `prop2`, ..., `propN` are the names of the properties you want to extract from the `object`.

You can also use object destructuring with default values, like this:

```js
const { name = "Anonymous", age } = person;
console.log(name); // 'Alice'
console.log(age); // 30
```

In this case, if the `person` object does not have a `name` property, the default value `'Anonymous'` will be used instead.

Object destructuring is a powerful feature in JavaScript that makes it easier to work with objects, and can help make your code more concise and readable.

```js
const obj = { a: 1, b: 2, c: 3 };
const { a, ...rest } = obj;
console.log(a); // 1
console.log(rest); // { b: 2, c: 3 }
```

## Array

In JavaScript, array destructuring is a way to extract values from an array and assign them to individual variables, using a concise and expressive syntax.

Here is an example of array destructuring:

```js
const numbers = [1, 2, 3];

const [a, b, c] = numbers;

console.log(a); // 1
console.log(b); // 2
console.log(c); // 3
```

In the example above, we are destructuring the `numbers` array to extract the values of its elements at indices `0`, `1`, and `2`, and assign them to individual variables `a`, `b`, and `c`.

The syntax for array destructuring is as follows:

```js
const [element1, element2, ..., elementN] = array;
```

where `element1`, `element2`, ..., `elementN` are the names of the variables you want to assign to the elements of the `array`.

You can also use array destructuring with default values, like this:

```js
const [x = 0, y = 0, z = 0] = [1, 2];
console.log(x); // 1
console.log(y); // 2
console.log(z); // 0
```

In this case, if the array `[1, 2]` does not have enough elements to assign to all three variables `x`, `y`, and `z`, the default value `0` will be used instead.

Array destructuring is a powerful feature in JavaScript that makes it easier to work with arrays, and can help make your code more concise and readable.

```js
const arr = [1, 2, 3, 4];

const [a, ...b] = arr;

console.log(a); // 1
console.log(b); // [2, 3, 4]
```

# Computed Properties

```js
const address = "KD";
const obj = {
  [address] = 23
};
```

# Enhanced Object Literals

```js
const address = "KD";
const obj = {
  address,
};
```
