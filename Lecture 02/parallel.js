/**
 * This is a simple example of parallel execution of a function
 * using the async library.
 * Promise all is used to wait for all the promises to be resolved.
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

(async () => {
  const [dataFromDB, dataFromAPI] = await Promise.all([
    getDataFromDB(),
    getDataFromAPI(),
  ]);
  console.log(dataFromDB, dataFromAPI);
})();
