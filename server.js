export default class App extends Micro {
  port: 4000
  binding: '127.0.0.1'
  publicFolder: 'public'
  viewEngine: 'jade'
  // comes built in with caching
  cache: {
    type: 'redis',
    expiresIn: '365 days'
  }
  // creates a https server
  https: {
    key: '',
    certificate: ''
  }
  // comes with sessions built in as long as
  // secret key is provided
  sessions: {
    store: 'memory',
    secretKey: process.env.CookieSecret
  }
  logging: {
    stdout: true,
    // file: false
  }
  html5Mode: false

  //
  // cache changes based on the file mtime
  // Useful for landing pages.
  //
  // @cache
  @index
  // means that it will skip out the view engine and compile to html
  // and put in the public folder so we can let web server cache it
  @html || @static
  home ('/home') {
    // sets response code to 200 by default unless error
    // occurs in middleware
    return 'Hello World'
  }

  @post
  @route('/post_it')
  post_it() {
    setHeader('Content-Type', '')
    // will return '/'
    return urlFor('home')
  }

  @get
  @route('idea/:id')
  idea () {
    // can return status codes with blank body
    return 400
  }

  // get is implied if nothing is given
  @route('/renderTest')
  renderTest () {
    let users = [{
      name: 'Alice'
    }, {
      name: 'Bob'
    }];

    // uses the specified view engine without prefix
    return render('index', users)
  }

  path() {
    setStatusCode(301)
    return url_for('idea')
    // equiv to
    return redirectTo(url_for('idea'))
  }

  // multiple HTTP verbs in one decorator
  @http('get, post')
  // allow user defined decorators
  @auth
  @middleware('name, look')
  rendered() {
    // can return an array for destructuring
    return ["Displaying only a few routes", 200]
  }

  //
  // Error fallback routes
  //
  // Implicitly sets correct status codes.
  //

  code404(error) {
    return error
  }

  code500(error) {
    return error
  }
}
