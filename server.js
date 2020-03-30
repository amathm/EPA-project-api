
/**
 * @typedef {import} http
 */
const http = require('http');

const path = require('path');

/**
 * @typedef {import} app
 */
const app = require('./app');

/**
 * @typedef {import} https
 */
const https = require('https');

/**
 * @typedef {import} app
 */
const fs = require('fs');

/**
 * @typedef {import} mongoose
 */
const mongoose = require('mongoose');

/**
 * @constant options
 * https certificates
 */
// const options = {
//   key: fs.readFileSync(path.join(process.cwd()+'/resources/certs/key.pem')),
//   cert: fs.readFileSync(path.join(process.cwd()+'/resources/certs/cert.pem')),
// };

/**
 * @type {string|number}
 */
const port = process.env.PORT || 3000;

const childProcess = require('child_process');


/**
 * @function - IIFE
 * deletes existing database collections
 * due to issues with mongodb atlas connections
 * need to ensure collections dropped after test
 */
(() => {
  mongoose.connection.collections.users.drop(() => {
    console.log('user collection deleted');
  });
  mongoose.connection.collections.products.drop(() => {
    console.log('products collection deleted');
  });
  
  /**
   * @function
   * @param {String}
   * @param {Function}
   * function to call products seeder
   * once database collection has been dropped
   */
function runScript(scriptPath, callback) {

    var invoked = false;

    var process = childProcess.fork(scriptPath);

    process.on('error', function (err) {
        if (invoked) return;
        invoked = true;
        callback(err);
    });

    process.on('exit', function (code) {
        if (invoked) return;
        invoked = true;
        var err = code === 0 ? null : new Error('exit code ' + code);
        callback(err);
    });

}

  runScript('./resources/seeders/products.seeders.js', function (err) {
      if (err) throw err;
      console.log('completed executing products.seeder.js');
      // need to keep server runnning...
      // process.exit();
  });
})();

/**
 * @function
 * @param {Function} app
 */
const server = http.createServer(app);

/**
 * @function
 * @param {string} port
 */
server.listen(port);

/**
 * @function 
 */
// https.createServer(options, app).listen(443);