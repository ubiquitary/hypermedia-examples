# hypermedia-examples

A single data object represented in many hypermedia formats.

## Objectives

  1. Provide a comparison basis of differing hypermedia formats
    + Create an API which will provide common data in various formats
      - [x] [Collection+JSON][cj-link]
      - [x] [HAL+JSON][hal-link]
      - [ ] [JSON-LD][ld-link]
      - [ ] [Siren][siren-link]
      - [ ] [Hydra][hydra-link]
      - [ ] [JSON API][json-api-link]
      - [ ] Uber
      - [ ] Mason
    + Change between formats using the Accept header option
    + [Hypermedia Formats](https://gist.github.com/soofaloofa/9350847)
    + [Description Languages](http://blog.sgo.to/2014/03/rows-and-idls.html)
  2. Show the "layering in" of affordances
    1. [x] Hyperlinks (links)
    2. [ ] Actions (forms)
  3. Brainstorm a way to map affordances onto representations
    + Affordances - actions that can be taken on a resource
      - Using (possibly [self-descriptive]) schemas

## Usage

  1. `npm install`
  2. `npm start`
  3. Supported API Endpoints (*supported mediatypes indicated above*)
    + GET http://localhost:8080/api/characters
    + GET http://localhost:8080/api/characters/albert
    + GET http://localhost:8080/api/characters/bert
    + GET http://localhost:8080/api/characters/jane
    + GET http://localhost:8080/api/characters/mary
    + GET http://localhost:8080/api/characters/michael

[cj-link]: http://amundsen.com/media-types/collection/
[hal-link]: http://stateless.co/hal_specification.html
[hydra-link]: http://www.markus-lanthaler.com/hydra/
[json-api-link]: http://jsonapi.org/
[ld-link]: http://json-ld.org/
[self-descriptive]: http://snowplowanalytics.com/blog/2014/05/15/introducing-self-describing-jsons/
[siren-link]: https://github.com/kevinswiber/siren
