var fs = require('fs'),
    url = require('url'),

    bodyParser = require('body-parser'),
    express = require('express'),

    Ubiquitary = require('./ubiquitary'),

    app = express(),
    port = process.env.PORT || 8080,
    router = express.Router();

function getResource(name) {
  var PATH = './resources/characters/#.json',
      result;

  try {
    result = JSON.parse(fs.readFileSync(PATH.replace('#', name), 'utf-8'));
  } catch (e) {}

  return result;
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

router
  .get('/characters/:alias', function resourceFn(req, res) {
    var data = getResource(req.params.alias.toLowerCase()),

        contentType = Ubiquitary.mediaType(req.headers.accept),
        result = Ubiquitary.response(contentType, data);

    res.setHeader('Content-Type', contentType);
    res.statusCode = result ? 200 : 404;
    res.json(result || {});
  });

app.use('/api', router);

app.listen(port);
console.log('Magic happens on port ' + port);
