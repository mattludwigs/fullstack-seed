/* eslint-disable no-console */
'use strict';

import _ from 'lodash';
import fs from 'fs';
import { info } from '../lib/log';
const apiPath = __dirname + '/api';
// load routes sync
const files = fs.readdirSync(apiPath);
const routesInejector  = routesLoader(files, apiPath);

function routesLoader(files, path) {
  const f = _.clone(files, true);

  return server => {
    f.forEach((file) => {
      if (file !== 'README.md') {
        info(`[ROUTE INJECTOR]: Loading route from file: ${file}`);
        server.route(require(`${path}/${file}`).default);
      }
    });
  }
}

export default routesInejector;
