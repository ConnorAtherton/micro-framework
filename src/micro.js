export default Micro {
  post: 5000,
  binding: 'localhost',
  publicFolder: 'public',
  cache: 'memory',
  sessions: {
    store: 'memory'
  },
  logging: {
    stdout: true,
    file: true,
    path: './log/micro.log'
  }

  setHeader() {

  }

  setResponseCode() {

  }

  redirectTo() {

  }
}
