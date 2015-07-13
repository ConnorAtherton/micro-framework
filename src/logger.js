import { log } from 'headway';

const DEFAULT_LOG_PATH = 'log/micro.log';

export default class Logger {
  constructor(config) {
    this.logPath = config.path || defaultLogPath;
    this._outputStream = fs.createWriteStream(this.logPath);
  }

  debug() {

  }

  warn() {

  }

  error() {

  }

  //
  // private
  //

  _mkdir() {

  }
}
