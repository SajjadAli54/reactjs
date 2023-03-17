const cluster = require("cluster");

if (cluster.isWorker) {
  console.log("Worker", cluster.worker.id, "is running");
} else {
  console.log("Master is running");
  cluster.fork();
  cluster.fork();
}
