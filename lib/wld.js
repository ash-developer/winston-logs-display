'use strict';

const Promise = require('bluebird');
const _ = require('lodash');

function WLD (logger) {
  this.transport = logger.transports[_.keys(logger.transports)[0]];
}

/**
 * return logs for provided options
 *
 * @param options
 * @returns {bluebird}
 */
WLD.prototype.list = function (options) {
  options.limit = _.get(options, 'limit', 50);
  options.offset = _.get(options, 'offset', 0);

  return new Promise((resolve, reject) => {
    this.transport.query({
      start: options.offset,
      limit: options.limit
    }, (error, logs) => {
      if (error) {
        return reject(error);
      }

      resolve(logs);
    });
  });
};

module.exports = WLD;
