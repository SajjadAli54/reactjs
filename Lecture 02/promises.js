/**
 * Callbacks are not the best way to handle asynchronous code.
 * It is a callback hell.
 * It is difficult to read and maintain.
 * It is difficult to debug.
 * It is difficult to handle errors.
 * It is difficult to handle multiple asynchronous calls.
 * It is difficult to handle multiple asynchronous calls in a sequence.
 *
 * Promises are the best way to handle asynchronous code.
 * It uses the concept of chaining.
 *
 * Three states of a promise:
 * 1. Pending: Initial state
 * 2. Resolved: Completed successfully
 * 3. Rejected/Failed: Completed with an error
 *
 * Resolve and Reject are the two functions which are passed to the Promise constructor.
 * Resolve is associated with the resolved state i.e then method.
 * Reject is associated with the rejected state i.e catch method.
 */

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const apiData = JSON.stringify({
      name: "John",
      age: 30,
    });

    if (!apiData) return reject("No Data Found");
    resolve(apiData);
  }, 2000);
});

console.log("Before calling promise");
promise
  .then((res) => JSON.parse(res))
  .then((data) => {
    console.log("Response ", data);
  })
  .catch((error) => {
    console.log("Error ", error);
  });
console.log("After calling promise");
