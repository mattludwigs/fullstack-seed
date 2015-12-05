'use strict';

require('assert-dotenv')();
require('babel-register');

const server = require('./server/index').default;
const loger = require('./lib/log');

loger.info('[MONGO]: Connecting to Mongo @ ' + process.env.MONGO_URL);
const db = require('./server/db').default(process.env.MONGO_URL);

db.connection.on('error', () => {
  loger.error('[MONGO]: Could not connect to mongodb');
});

db.connection.once('open', () => loger.okay('[MONGO]: CONNECTION:MONGO ✔'));

server.start(() => {
  loger.log(`[SEVER]: started @ ${server.info.uri} 🍺`, 'magenta');
});

