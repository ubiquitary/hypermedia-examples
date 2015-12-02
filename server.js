var url = require('url'),

    bodyParser = require('body-parser'),
    express = require('express'),

    Ubiquitary = require('./ubiquitary'),

    app = express(),
    charactersList = require('./resources/characters.json'),
    charactersMap,
    port = process.env.PORT || 8080,
    router = express.Router();

charactersMap = charactersList
  .reduce(function mapper(acc, item) {
    acc[item.alias.toLowerCase()] = item;

    return acc;
  }, {});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

router
  .get('/characters', function collectionResponse(req, res) {
    var contentType = Ubiquitary.mediaType(req.headers.accept),
        result = Ubiquitary.response(contentType, charactersList);

    res.setHeader('Content-Type', contentType);
    res.statusCode = 200;
    res.json(result);
  });

router
  .get('/characters/:alias', function resourceResponse(req, res) {
    var name = req.params.alias.toLowerCase(),
        data = JSON.parse(JSON.stringify(charactersMap[name] || '')),

        contentType = Ubiquitary.mediaType(req.headers.accept),
        result = Ubiquitary.response(contentType, data);

    res.setHeader('Content-Type', contentType);
    res.statusCode = result ? 200 : 404;
    res.json(result || {});
  });

app.use('/api', router);

app.listen(port);
console.log('Magic happens on port ' + port);
