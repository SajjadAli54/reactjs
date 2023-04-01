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
