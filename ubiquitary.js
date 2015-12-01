var formatters = {
  'application/hal+json': function halFormatter(input) {
    input._links = {
      self: { href: '/api/characters/' + input.alias }
    };

    return input;
  },
  'application/vnd.simple+json': function simpleFormatter(input) {
    input.href = '/api/characters/' + input.alias;

    return input;
  }
};

function response(type, input/*, additionalAffordances*/) {
  var result;

  if (input) {
    result = JSON.parse(JSON.stringify(input));

    result = formatters[type] ? formatters[type](result) : result;
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
