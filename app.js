'use strict';

var serveStatic = require('serve-static');

function Hamm(logger, title) {

}

Hamm.prototype.display = function () {
    return serveStatic('public', {index: ['index.html']})
};

Hamm.prototype.flows = function (socket) {

    socket.on('test', function () {});

};

module.exports = Hamm;
