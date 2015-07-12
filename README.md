# Micro

A painless server in node.

## Aims

- Middleware through ES7 class decorators
- Fast, trie-based router
- Should still support middleware functions through @middleware
  but res, req, and next are not available in the final route
  definition.
- HTTP spec compliant (Looking toward HTTP 2)
- should be able to specify 404, 504 error functions
