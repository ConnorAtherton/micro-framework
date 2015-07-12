import { log } from 'headway';

const defaultLogPath = 'log/micro.log';

export default class Logger {
  constructor(config) {
    this.logPath = config.path || defaultLogPath;
    this._outputStream = fs.createWriteStream(this.logPath);
  }

  debug: (msg) -> {

  }

  warn: (msg) -> {

  }

  error: (msg) -> {

  }

  // private
  _mkdir: () -> {

  }
}
