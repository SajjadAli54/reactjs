/**
 * Async/Await
 * It is a syntactic sugar over promises.
 * It is a non-blocking code.
 * It is a combination of async and await keywords.
 * Await will throw an error if called without async.
 * It is used to handle promises.
 *
 */

function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const apiData = JSON.stringify({
        name: "John",
        age: 30,
      });

      if (!apiData) return reject("No Data Found");
      resolve(apiData);
    }, 2000);
  });
}

console.log("Before calling promise");

// Immediately Invoked Function Expression
(async function () {
  try {
    const data = await getData();

    console.log("Response ", JSON.parse(data));
  } catch (error) {
    console.log("Error ", error);
  }
})();
