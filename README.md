# hypermedia-examples

A single data object represented in many hypermedia formats.

## Objectives

  1. Provide a comparison basis of differing hypermedia formats
    + Create an API which will provide common data in various formats
      - [x] Collection+JSON
      - [x] HAL+JSON
      - [ ] JSON-LD
      - [ ] Siren
    + Change between formats using the Accept header option
  2. Show the "layering in" of affordances
    1. [x] Hyperlinks (links)
    2. [ ] Actions (forms)
  3. Brainstorm a way to map affordances onto representations
    + Affordances - actions that can be taken on a resource
      - Using (possibly [self-descriptive](self-desc)) schemas

## Usage

  1. `npm install`
  2. `npm start`
  3. Supported API Endpoints
    + GET http://localhost:8080/api/characters
    + GET http://localhost:8080/api/characters/albert
    + GET http://localhost:8080/api/characters/bert
    + GET http://localhost:8080/api/characters/jane
    + GET http://localhost:8080/api/characters/mary
    + GET http://localhost:8080/api/characters/michael

[self-desc]: (http://snowplowanalytics.com/blog/2014/05/15/introducing-self-describing-jsons/)
