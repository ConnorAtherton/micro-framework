export default class App extends Micro {
  port: 400,
  binding: '127.0.0.1',
  public: 'public'

  @route('/')
  @cache
  home() {
    return 'Hello World'
  }

  @post
  @route('/')
  @name('post_route')
  post_it() {
    req.header('Content-Type', '')
    // will return '/'
    return url_for('home')
  }

  @get
  @route('name/:idea')
  idea() {

  }

  @redirect('home')
  @get
  path() {

  }
}
