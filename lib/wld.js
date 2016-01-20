'use strict';

var Promise = require('bluebird');

function WLD(logger) {
    this.logger = logger;
    this.count = null;
}

WLD.prototype.list = function (options) {
    return new Promise(function (resolve, reject) {

        resolve([]);

    });
};

module.exports = WLD;
