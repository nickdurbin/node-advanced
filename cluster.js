// const cluster = require('cluster')

// // Is file being executed in master mode?
// if (cluster.isMaster) {
//   // Cause index.js to be executed again 
//   // but in child mode
//   cluster.fork()
// } else {
//   // I am a child, i am going to
//   // act like a server and do nothing else