module.exports = function(app, logger) {
  var jade = require('jade');
  var fs = require('fs');
  var logPath = logger.transports.file.dirname + logger.transports.file.filename;

  app.get('/logs', function(req, res, next) {
    fs.exists(logPath, function(exist) {
      if (exist) {
        fs.readFile(logPath, 'utf-8', function(error, data) {
          var lines = [];
          if (!error) {
            lines = data.toString()
              .split('\n')
              .reverse()
              .splice(1, 30);

            for (var i = 0; i < lines.length; i++) {
              lines[i] = JSON.parse(lines[i]);
            }
          }

          var html = jade.renderFile(__dirname + '/views/logs.jade', { lines: lines });
          res.send(html);
        });
      } else {
        var html = jade.renderFile(__dirname + '/views/logs.jade', { lines: [] });
        res.send(html);
      }
    });

  });
};
