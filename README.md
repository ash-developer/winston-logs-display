winston-logs-display
====================

Node.js module for express, main purpose of that module is make easy access to winston logs.

To install that module use command

```
npm install winston-logs-display
```

And there is simple example of using it

```
var app = require('express')();
var winston = require('winston');
var logger = new (winston.Logger)({
    transports: [
        new (winston.transports.File)({
            filename: 'logs/winston.log'
        })
    ]
});
require('winston-logs-display')(app, logger);
```

After that you can see all logs by url http://yourhost:port/logs.
