/**
  * For ILLUSTRATION purposes only!
  *
  * This is meant for functional testing only and not intended as a model for
  * a "real-world" solution. This file is meant only to provide an API which
  * provides the "same" - source - data in many popular hypermedia formats.
  */
var formatters,
    rootUrl = '/api/characters';

formatters = {
  'application/collection+json': function cjFormatter(input) {
    var result;

    result = {
      collection: {
        version: '1.0',
        href: rootUrl
      }
    }

    result.collection.items = Array.isArray(input)
      ? input.map(cjItem)
      : [cjItem(input)];

    return result;
  },

  'application/hal+json': function halFormatter(input) {
    var result;

    if (Array.isArray(input)) {
      result = {
        _links: {
          self: { href: rootUrl }
        },
        size: input.length,
        _embedded: {
          characters: input.map(halFormatter)
        }
      };
    } else {
      result = input;

      result._links = {
        self: { href: rootUrl + '/' + input.alias }
      };
    }

    return result;
  }
};

function aCopyOf(obj) {

  return JSON.parse(JSON.stringify(obj));
}

function cjItem(item) {
  var result;

  result = {
    data: [
      {name: 'alias', value: item.alias},
      {name: 'name', value: item.name}
    ],
    links: item.friends
      .map(function friendsMap(link) {

        return {rel: 'friends', href: link, array: true};
      }).concat({rel: 'photo', href: item.photo})
  };

  return result;
}

function response(type, input/*, additionalAffordances*/) {
  var result,
      type;

  if (input) {
    type = mediaType(type);

    result = formatters[type]
      ? formatters[type](aCopyOf(input))
      : input;
  }

  return result;
}

function mediaType(type) {

  return formatters[type] ? type : 'application/json';
}

module.exports = {
  response: response,
  mediaType: mediaType
};
