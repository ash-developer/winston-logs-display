winston-logs-display
====================

Node.js module for express, main purpose of that module is make easy access to winston logs.

To install that module use command

```
npm install --save-dev winston-logs-display
```

And there is simple example of using it

```
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
    logger.log('info', 'server started on port 3000');
});
```

After that you can see all logs by url http://yourhost:port/logs.
