export default class App extends Micro {
  port: 4000
  binding: '127.0.0.1'
  publicFolder: 'public'
  // comes built in with caching
  cache: 'redis'
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
    file: false
  }

  @route('/')
  // cache changes based on the file mtime
  @cache
  home() {
    return 'Hello World'
  }

  @post
  @route('/')
  @name('post_route')
  post_it() {
    set_header('Content-Type', '')
    // will return '/'
    return url_for('home')
  }

  // get is implied if nothing is given
  @get
  @route('name/:idea')
  idea() {
    // can return status codes with blank body
    return 400
  }

  @route('/render')
  render() {
    // sync method
    let users = getUsers();
    return render('index', users)
  }

  @redirect('home')
  path() {
    set_status_code(301)
    return url_for('idea')
    // equiv to
    return redirectTo(url_for('idea'))
  }

  @http('get, post, put')
  @middleware('one, two, three')
  limited() {
    // can return an array for destructuring
    return ["Displaying only a few routes", 200]
  }
}
