/* eslint-disable no-console */
'use strict';

import _ from 'lodash';
import fs from 'fs';
import { error, info } from '../lib/log';
const path = __dirname + '/register';
// load routes sync
const files = fs.readdirSync(path);
const registerInejector  = registerLoader(files, path);

function registerLoader(files, path) {
  const f = _.clone(files, true);

  return server => {
    f.forEach((file) => {
      if (file !== 'README.md') {
        info(`[REGISTER INJECTOR]: Loading plugin from file: ${file}`);
        server.register(require(`${path}/${file}`).default, err => {
          if (err) {
            error(err.message);
          }
      });
      }
    });
  }
}

export default registerInejector;
