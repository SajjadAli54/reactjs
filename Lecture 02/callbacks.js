/**
 * -----Callbacks and High Order Functions-----
 * Asynchronous programming
 * Event Handling
 * Also called as After Call
 * Timers
 * Promises
 * Async/Await
 *
 * Js is a single threaded language. It can only execute one task at a time.
 * It has two types of instructions.
 * Blocking and Non-blocking
 * Blocking instructions are executed one by one.
 * Non-blocking instructions are executed in parallel.
 * Non-blocking instructions are executed in a different thread.
 *
 * It has a call stack and a message queue.
 * It has a event loop which checks the call stack is empty or not.
 * If it is empty, it will push the first element from the message queue to the call stack.
 * It will be executed.
 *
 *
 * */

function getData(callback) {
  console.log("Getting Data before callback");
  setTimeout(() => {
    const apiData = {
      name: "John",
      age: 30,
    };
    callback(apiData);
  }, 2000);
  console.log("Getting Data after callback");
}

console.log("Before calling getData");

getData((data) => {
  console.log("Response ", data);
});

console.log("After calling getData");

/**
 * Output:
 * Before calling getData
 * Getting Data before callback
 * Getting Data after callback
 * After calling getData
 * Response { name: 'John', age: 30 }
 * Reason:
 * -- Event Loop
 * -- Call Stack
 * -- Message Queue or Event Queue
 * setTimeout is a asynchronous function.
 * It will be executed after the call stack is empty from the current execution context.
 * It will be pushed into the Message queue after time interval scheduling.
 * Event Loop will check the call stack is empty or not.
 */
