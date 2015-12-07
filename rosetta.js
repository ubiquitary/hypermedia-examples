var fs = require('fs'),

    hb = require('handlebars'),

    cache = {},
    template = {};

/**
  * Rosetta Configuration object.
  *
  * @param mediatype {string} - standard mediatype definition.
  * @param template {string} - string representation of template.
  * @param data {object} - object (DTO) to transform.
  * @param affordances {object} - additional affordances to include in the transformation.
  * @param demotic {bool} - 
  */

/**
  * Entry point for all of Rosetta operations:
  *
  *  * Translating DTO into Hypermedia
  *  * Translating Hypermedia out to Demotic
  *
  * @arg config {RosettaConfig}
  */
function translate (config) {}
