# Micro

A next generation JavaScript web framework.

## Aims

To mix the best of Express, Flask, and Sinatra into an easy-to-use,
expressive node.js web framework.

- Middleware through ES7 class decorators
- Fast, trie-based router
- Should still support middleware functions through @middleware
  but res, req, and next are not available in the final route
  definition.
- HTTP spec compliant (Looking toward HTTP 2)
- Should be able to specify 404, 504 error functions without worrying
  about ordering
- Should give warning if we overwrite a route definition

## Building

Babel with following transformers enabled

- class properties
- decorators

## Middleware

If a function is decorated with an unknown function then look to the list
of middleware present and if that fails raise an error.

## Dir structure

. server.js
/ decorators
/ public
/ node_modules

## Modules needed

- https://github.com/tj/consolidate.js/blob/master/lib/consolidate.js for rendering
