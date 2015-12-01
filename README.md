# hypermedia-examples

A single data object represented in many hypermedia formats.

## Objectives

  1. Provide a comparison basis of differing hypermedia formats
    1. Provide an API which can serve a single data object in many Hypermedia
       formats; change between them using the Accept header option
    2. Map from raw data to Hypermedia format through transformation functions
  2. Show the "layering in" of additional affordances:
    1. Hyperlinks (links)
    2. Actions
    3. Embedded resources

## Usage

  1. `npm install`
  2. `npm start`
  3. GET requests to
    + http://localhost:8080/api/characters/albert
    + http://localhost:8080/api/characters/bert
    + http://localhost:8080/api/characters/jane
    + http://localhost:8080/api/characters/mary
    + http://localhost:8080/api/characters/michael

*Supported media types: application/json, application/hal+json, application/vnd.simple+json.*
