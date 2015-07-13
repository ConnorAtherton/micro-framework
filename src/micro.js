import EventEmitter from 'events';

export default Micro extends EventEmitter {
  post: 5000,
  binding: 'localhost',
  publicFolder: 'public',
  cache: 'memory',

  //
  // TODO: create a node cache module with different
  //       in built engines
  //
  sessions: {
    store: 'memory'
  },

  //
  // Using a simple log class here but could switch it out
  // for something like winston.
  //
  logging: {
    stdout: true,
    file: true,
    path: './log/micro.log'
  }

  //
  // To integrate with SPA's.
  //
  // Does not call error handlers and instead redirects
  // to the route decorated with @index. It will throw an error
  // if two routes have been decorated with @index or none have.
  //
  html5Mode: false

  constructor() {
    super()
  }

  //
  //
  // @params name String - name of header
  // @param value String - valufe of header
  //
  // TODO: as defined in http://www.ietf.org/rfc/rfc2068.txt
  //
  setHeader(name, value) {

  }

  //
  // can be an integer 200
  // or a string 'ok'
  //
  setResponseCode(code) {

  }

  //
  // If it starts with leading '/' then
  // interpret as an absolute route otherwise
  // treat as a named route
  //
  redirectTo(route) {

  }

  //
  // Calls consolidate.js with template engine set
  // previously
  //
  render(template, variables) {

  }
}
