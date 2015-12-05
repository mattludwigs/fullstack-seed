/* eslint-disable no-console */

import chalk from 'chalk';

export function info(msg) {
  console.log(chalk.yellow(msg));
}

export function okay(msg) {
  console.log(chalk.green(msg));
}

export function error(msg) {
  console.log(chalk.bold.red(msg));
  throw new Error(msg);
}

export function log(msg, color = 'cyan') {
  console.log(chalk[color](msg));
}
