'use strict';

var jade = require('jade'),
    wld;

module.exports = function (app, logger) {

    wld = new (require('./lib/wld'))(logger);

    app.get('/logs', function(req, res, next) {
        res.redirect('/logs/1');
    });

    app.get('/logs/:page', function(req, res, next) {
        var page = req.params.page || 1;

        wld.list({
            limit: 50,
            offset: (page - 1) * 50
        }).then(function (logs) {
            res.send(jade.renderFile(__dirname + '/views/logs.jade', {logs: logs}, null));
        });

    });

};
