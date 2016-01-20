'use strict';

var Promise = require('bluebird'),
    _ = require('lodash');

function WLD(logger) {
    this.transport = logger.transports[_.keys(logger.transports)[0]];
    this.count = null;
}

/**
 * return logs for provided options
 *
 * @param options
 * @returns {bluebird}
 */
WLD.prototype.list = function (options) {
    var self = this;

    options.limit = options.limit || 50;
    options.offset = options.offset || 0;

    return new Promise(function (resolve, reject) {

        self.transport.query({}, function (error, logs) {
            if (error) {
                return reject(error);
            }

            self.count = logs.length;
            logs = logs.splice(options.offset, options.limit);

            resolve(logs);
        });

    });
};

module.exports = WLD;
