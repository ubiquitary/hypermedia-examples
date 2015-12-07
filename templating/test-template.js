var fs = require('fs'),

    hb = require('handlebars'),

    data = require('../resources/characters.json'),
    templates;

templates = {
  'application/collection+json': hb.compile(fs.readFileSync('./templating/cj.txt', 'utf-8')),
  'application/hal+json': hb.compile(fs.readFileSync('./templating/hal.txt', 'utf-8'))
};

console.log(templates['application/hal+json']({items: data, root: '/hello'}));
