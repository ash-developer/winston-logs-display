const app = require('express')();
const winston = require('winston');

const logger = new (winston.Logger)({
    transports: [
        new (winston.transports.File)({
            filename: 'winston.log'
        })
    ]
});

require('./app.js')(app, logger);

app.listen(3000, function () {
    logger.log('info', 'Hello distributed log files!');
});
