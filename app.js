'use strict';

var jade = require('jade'),
    _ = require('lodash'),
    wld;

module.exports = function (app, logger) {

    wld = new (require('./lib/wld'))(logger);

    app.get('/logs', function(req, res) {
        res.redirect('/logs/1');
    });

    app.get('/logs/:page', function(req, res) {
        var page = req.params.page || 1,
            itemsOnPage = 30;

        wld.list({
            limit: itemsOnPage,
            offset: (page - 1) * itemsOnPage
        }).then(function (logs) {
            var pagesCount = Math.floor(wld.count / itemsOnPage) + (wld.count % itemsOnPage === 0 ? 0 : 1);

            res.send(jade.renderFile(__dirname + '/views/logs.jade', {
                logs: logs,
                pages: _.range(1, pagesCount + 1)
            }, null));
        });

    });

};
