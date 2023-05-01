# Callbacks and Higher Order Functions

In JavaScript, a callback is a function that is passed as an argument to another function, and is intended to be called at a later time. The purpose of a callback is to allow asynchronous processing, or to provide a way for one function to call another function once it has finished its processing.

A higher-order function is a function that takes one or more functions as arguments, or returns a function as its result. Higher-order functions are often used to create abstractions, such as mapping, filtering, or reducing data structures, and are a key feature of functional programming.

In JavaScript, callbacks and higher-order functions often go hand-in-hand. Here is an example of a higher-order function that takes a callback as an argument:

```js
function mapArray(arr, callback) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
  return result;
}

const numbers = [1, 2, 3, 4, 5];

const squared = mapArray(numbers, function (x) {
  return x * x;
});

console.log(squared); // [1, 4, 9, 16, 25]
```

In this example, `mapArray` is a higher-order function that takes an array and a callback function as arguments. The `mapArray` function iterates over each element in the array, and applies the callback function to each element to transform it in some way. The transformed values are collected into a new array and returned.

The callback function passed to `mapArray` is a simple function that takes a single argument `x` and returns its square. This function is called for each element in the `numbers` array, and the squared values are collected into the `squared` array.

Callbacks and higher-order functions are powerful tools in JavaScript, and are widely used in modern web development. By understanding these concepts, you can write more flexible and modular code, and take advantage of the full power of the JavaScript language.

---

# Event Loop: Call Stack and Message Queue

In JavaScript, the call stack and message queue are two key concepts related to the event loop, which is responsible for handling asynchronous code execution.

The call stack is a data structure that records where in the program the execution is at any given moment. When a function is called, a new frame is added to the top of the call stack, and when the function returns, the frame is removed from the stack. This is a last-in, first-out (LIFO) structure, meaning that the most recently added item is the first one to be removed.

For example, consider the following code:

```js
function foo() {
  console.log("foo");
}

function bar() {
  console.log("bar");
  foo();
}

bar();
```

When the `bar` function is called, a new frame is added to the call stack, and the console logs "bar". Then, the `foo` function is called, adding another frame to the stack, and logging "foo". When `foo` returns, its frame is removed from the stack, and execution resumes in the `bar` function, which also returns and is removed from the stack.

The message queue is a data structure that stores messages (or events) to be processed by the event loop. When an asynchronous operation completes, such as a network request or a timer, a message is added to the message queue. The event loop checks the message queue for new messages and adds them to the call stack when it is empty.

For example, consider the following code:

```js
console.log("start");

setTimeout(function () {
  console.log("timeout");
}, 1000);

console.log("end");
```

When this code is executed, the console logs "start" and "end" are added to the call stack and immediately executed. Then, the `setTimeout` function is called, which schedules the callback function to be executed after a delay of one second. The `setTimeout` function returns immediately, and its frame is removed from the stack.

After one second has passed, the callback function is added to the message queue. The event loop checks the message queue for new messages and finds the callback function waiting to be executed. The callback function is then added to the call stack and executed, logging "timeout".

In summary, the call stack and message queue are key concepts in JavaScript that help to manage the execution of synchronous and asynchronous code. The call stack keeps track of where in the program the execution is currently at, while the message queue stores messages to be processed by the event loop when the call stack is empty.

---

# Asynchronous Programming

Asynchronous programming in JavaScript is a way to execute code without blocking the execution of other code. This is particularly important for web development, where code is often executed in response to user input or network events, and where blocking code can cause unresponsive or slow user interfaces.

JavaScript provides several mechanisms for asynchronous programming, including callbacks, promises, and async/await.

## Callbacks

A callback is a function that is passed as an argument to another function, and is called when that function has finished its processing. Callbacks are the oldest mechanism for asynchronous programming in JavaScript, but they can lead to callback hell, a situation where nested callbacks become difficult to read and maintain.

```js
function fetchData(url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      callback(xhr.responseText);
    }
  };
  xhr.open("GET", url);
  xhr.send();
}

fetchData("https://example.com/data", function (response) {
  console.log(response);
});
```

In this example, `fetchData` is a function that takes a URL and a callback function as arguments, and uses an `XMLHttpRequest` object to fetch data from the specified URL. When the data has been fetched, the callback function is called with the response data.

## Promises

A promise is an object that represents the eventual completion (or failure) of an asynchronous operation, and allows you to attach callbacks to handle the result. Promises were introduced in ES6, and provide a more readable and flexible way to handle asynchronous code than callbacks.

```js
function fetchData(url) {
  return new Promise(function (resolve, reject) {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(xhr.responseText);
        } else {
          reject(xhr.statusText);
        }
      }
    };
    xhr.open("GET", url);
    xhr.send();
  });
}

fetchData("https://example.com/data")
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.error(error);
  });
```

In this example, `fetchData` returns a promise that resolves with the response data if the request is successful, or rejects with an error message if the request fails. The `then` method is used to attach a success callback to the promise, and the `catch` method is used to attach an error callback.

## Async/await

Async/await is a syntax for writing asynchronous code that is based on promises, and was introduced in ES2017. It allows you to write asynchronous code that looks synchronous, making it easier to read and maintain.

```js
async function fetchData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

fetchData("https://example.com/data")
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.error(error);
  });
```

In this example, `fetchData` is an async function that uses the `fetch` function to make a network request and return the data as a JSON object. The `await` keyword is used to wait for the network request to complete before continuing with the next line of code. The result of the async function is a promise that resolves with the data. The `then` and `catch` methods are used to handle the result of the promise.

Asynchronous programming is an important part of modern web development, and is essential for building responsive and efficient user interfaces. By using callbacks, promises, or async/await, you can write code that executes

# Prmoises in detail

Promises in JavaScript are a way to handle asynchronous operations and provide a mechanism for returning values from those operations. A promise is an object that represents the eventual completion (or failure) of an asynchronous operation and can be in one of three states: pending, fulfilled, or rejected.

When a promise is created, it is in the pending state. It can transition to the fulfilled state when the operation completes successfully or to the rejected state if an error occurs. A promise can also be chained with other promises to handle asynchronous operations sequentially.

Here is an example of a promise:

```js
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("success");
  }, 1000);
});

promise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.error(error);
  });
```

In this example, a promise is created that waits for one second and then resolves with the value 'success'. The `then` method is called on the promise, which registers a callback to be executed when the promise is fulfilled. The `catch` method is called to handle any errors that occur during the promise execution.

Promises can also be chained together to handle asynchronous operations sequentially. Here is an example of a promise chain:

```js
const getData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ data: "data" });
    }, 1000);
  });
};

const processData = (data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data + " processed");
    }, 1000);
  });
};

getData()
  .then((result) => {
    return processData(result.data);
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });
```

In this example, the `getData` function returns a promise that resolves with the value `{ data: 'data' }`. The `processData` function takes the data as input and returns a promise that resolves with the processed data. The promises are chained together using the `then` method, so that the result of the first promise is passed to the second promise for processing. The final result is logged to the console.

Promises can also be used with the `async/await` syntax to make asynchronous code look more like synchronous code. Here is an example:

```js
const getData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ data: "data" });
    }, 1000);
  });
};

const processData = async () => {
  const result = await getData();
  const processedResult = await processData(result.data);
  console.log(processedResult);
};

processData().catch((error) => {
  console.error(error);
});
```

In this example, the `getData` function returns a promise that resolves with the value `{ data: 'data' }`. The `processData` function is declared as `async` and uses the `await` keyword to wait for the `getData` and `processData` promises to complete before logging the final result to the console.

In summary, promises in JavaScript are a powerful tool for handling asynchronous operations and can be used to write cleaner and more readable code. They provide a mechanism for returning values from asynchronous operations and can be chained together to handle operations sequentially.

## Promise methods

Promises in JavaScript come with several built-in methods to help developers work with asynchronous operations. Here are some of the most commonly used Promise methods:

1. `Promise.all()`: This method takes an array of promises as input and returns a new promise that resolves when all the promises in the array have resolved. If any of the promises in the array is rejected, the returned promise is immediately rejected with the reason of the first rejected promise.

2. `Promise.race()`: This method takes an array of promises as input and returns a new promise that resolves or rejects as soon as the first promise in the array resolves or rejects.

3. `Promise.resolve()`: This method returns a new Promise object that is resolved with a given value or Promise object. If the input value is already a Promise, it is simply returned.

4. `Promise.reject()`: This method returns a new Promise object that is rejected with a given reason.

5. `Promise.prototype.then()`: This method is used to register callbacks that will be called when a Promise is fulfilled. It takes two arguments: a callback function to be called when the Promise is fulfilled, and an optional callback function to be called if the Promise is rejected.

6. `Promise.prototype.catch()`: This method is used to register a callback that will be called when a Promise is rejected. It takes one argument: a callback function to be called when the Promise is rejected.

7. `Promise.prototype.finally()`: This method is used to register a callback that will be called when a Promise is settled, either fulfilled or rejected. It takes one argument: a callback function to be called when the Promise is settled.

These methods provide a convenient way to work with Promises and handle the results of asynchronous operations.

```js
/**
 * ---All and AllSettled
 * This is a simple example of parallel execution of a function
 * using the async library.
 * Promise all is used to wait for all the promises to be resolved.
 * The then clause is used to get the data from the promises.
 * If any single promise is failed, then the catch clause is executed.
 *
 * The Solution to this problem is to use the Promise.allSettled method.
 * This method will return the status of all the promises.
 *
 */

function getDataFromDB() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data from DB");
    }, 2000);
  });
}

function getDataFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data from API");
    }, 2000);
  });
}

Promise.all([getDataFromDB(), getDataFromAPI()])
  .then(([db, api]) => {
    console.log("Using then clause", db, api);
  })
  .catch((err) => {
    console.log("Error", err);
  });

(async () => {
  const [dataFromDB, dataFromAPI] = await Promise.all([
    getDataFromDB(),
    getDataFromAPI(),
  ]);
  console.log("Using Async and Await", dataFromDB, dataFromAPI);
})();

/**
 * Dealing with large amount of data in database
 * This is a simple example of parallel execution of a function
 * Instead of getting all data at a time, load in batch size
 * and then process it.
 * If you want to process all the data, then use Promise.allSettled
 * method.
 * Create the promise array and then use Promise.all to execute all
 * the promises.
 */

function getDataFromDB(batchSize, offset) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Data from DB ${batchSize} ${offset}`);
    }, 2000);
  });
}

function process(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Processed ${data}`);
    }, 2000);
  });
}

async function processAllData() {
  const batchSize = 100;
  const total = 1000;
  const promises = [];
  for (let offset = 0; offset < total; offset += batchSize) {
    promises.push(getDataFromDB(batchSize, offset));
  }
  const data = await Promise.all(promises);
  const processedData = await Promise.all(data.map(process));
  console.log(processedData);
}

async function updateDB(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Updated ${data}`);
    }, 2000);
  });
}

processAllData();
```

---

# Introduction to Reactjs

React is an open-source JavaScript library that is used to build user interfaces. It was developed by Facebook and is now maintained by a community of developers. React allows developers to create reusable UI components and build large-scale, single-page web applications.

To set up a React project using CDN links, follow these steps:

1. Create a new HTML file and add the following CDN links to the head section:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>React Project</title>
    <script
      crossorigin
      src="https://unpkg.com/react@17.0.2/umd/react.development.js"
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.development.js"
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/babel-standalone@6.26.0/babel.min.js"
    ></script>
  </head>
  <body>
    <div id="root"></div>
    <script type="text/babel">
      // Your React code goes here
    </script>
  </body>
</html>
```

2. Create a div with an id of "root" where your React components will be rendered.

3. Write your React code using JSX syntax inside a script tag with a type of "text/babel". JSX allows you to write HTML-like syntax inside your JavaScript code.

For example, you can create a simple React component like this:

```js
<script type="text/babel">
  function Greeting(props) {
    return <h1>Hello, {props.name}!</h1>;
  }

  const element = <Greeting name="John" />;

  ReactDOM.render(element, document.getElementById("root"));
</script>
```

4. Save the HTML file and open it in a web browser. You should see the rendered output of your React component.

This is a basic setup for a React project using CDN links. However, for larger projects, it is recommended to use a package manager like npm or yarn and a build tool like webpack or Parcel to manage dependencies and automate tasks.

## React Virtual DOM and Diffing Process

React's Virtual DOM (VDOM) is a lightweight representation of the actual DOM. It is a JavaScript object that contains all the properties and attributes of the real DOM elements, but without the actual elements themselves. The Virtual DOM is used by React to optimize the rendering process and improve performance.

When a change occurs in a React component, the Virtual DOM is updated with the new state or props. React then performs a process called "diffing" to compare the previous Virtual DOM with the new one and calculate the minimum number of changes required to update the actual DOM.

The diffing process works by comparing each element in the old Virtual DOM with its corresponding element in the new Virtual DOM. React uses a set of algorithms to determine whether an element has changed or not. If an element has changed, React calculates the minimum number of changes required to update the actual DOM and performs those changes.

React uses a few key strategies to optimize the diffing process:

1. Tree Reconciliation: React compares the entire tree structure of the old and new Virtual DOMs to determine which nodes have changed. If a node has changed, React will update the entire subtree below that node.

2. Keys: React uses "keys" to track which elements have changed. When rendering a list of elements, React assigns a unique key to each element in the list. If the order of the list changes, React can still determine which elements have changed based on their keys.

3. Batched Updates: React groups multiple updates together and performs them in batches to minimize the number of times the DOM is updated.

By using these strategies, React is able to minimize the number of updates required to update the actual DOM, which leads to better performance and a smoother user experience.

## Babel and JSX

Babel is a JavaScript transpiler that converts newer versions of JavaScript into older versions that are supported by more browsers. Babel is commonly used in React projects to transpile JSX syntax into plain JavaScript that can be understood by the browser.

JSX is a syntax extension for JavaScript that allows developers to write HTML-like code within their JavaScript code. JSX is not natively supported by browsers, so it must be transpiled into JavaScript before it can be executed in the browser.

Babel can transpile JSX syntax by using the "babel-plugin-transform-react-jsx" plugin. This plugin converts JSX code into plain JavaScript by replacing each JSX element with a call to a React.createElement() function. For example, the following JSX code:

```jsx
const element = <h1>Hello, world!</h1>;
```

will be transpiled into the following JavaScript code:

```js
const element = React.createElement("h1", null, "Hello, world!");
```

This transpiled code is what gets executed in the browser.

Babel can be configured to transpile JSX code by adding the "babel-plugin-transform-react-jsx" plugin to the project's .babelrc file. For example:

```json
{
  "presets": ["@babel/preset-env"],
  "plugins": ["@babel/plugin-transform-react-jsx"]
}
```

This configuration tells Babel to use the "babel-plugin-transform-react-jsx" plugin to transpile JSX syntax.

In summary, Babel is a transpiler that can convert JSX syntax into plain JavaScript that can be executed in the browser. By using Babel, developers can write modern JavaScript code and use JSX syntax while still ensuring that their code is compatible with older browsers.

---

# Pure Functions

In programming, a function is said to be "pure" if it has no side effects and always returns the same output for the same input. In other words, a pure function is deterministic - it only depends on its input and has no dependency on any external state.

Here are some characteristics of pure functions:

1. Pure functions have no side effects: They do not modify any state outside of their scope, such as changing a global variable or modifying a database.

2. Pure functions are idempotent: They will always produce the same output for the same input, no matter how many times they are called.

3. Pure functions are easy to test: Since pure functions have no side effects and always produce the same output for the same input, they are easy to test and can be tested in isolation.

4. Pure functions can be cached: Since pure functions produce the same output for the same input, they can be cached, which can improve performance.

5. Pure functions are composable: Since pure functions have no side effects, they can be combined and composed to form more complex functions.

Here is an example of a pure function:

```js
function add(a, b) {
  return a + b;
}
```

This function takes two arguments and returns their sum. It has no side effects and will always produce the same output for the same input.

In contrast, here is an example of an impure function:

```js
let x = 0;
function increment() {
  x++;
  return x;
}
```

This function modifies the value of the variable "x" outside of its scope, which is a side effect. Additionally, each time it is called, it returns a different output, which means it is not deterministic. Therefore, it is not a pure function.
