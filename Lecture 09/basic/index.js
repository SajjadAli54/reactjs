console.log("Hello World");

/**
 * Global Object
 *  - console
 *  - setTimeout
 *  - clearTimeout
 *  - setInterval
 *  - clearInterval
 *  - ...
 */
console.log(global);

global.setTimeout(() => {
  console.log("Hello World");
}, 1000);
