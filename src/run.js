import { micro } from './micro';
import {

} from './decorators'

export default function run(appPath, options = {}) {
  const transformers = [
    'es7.decorators',
    'es7.classProperties'
  ];

  let app = require('./server');

  try {
    app = require("babel").transform(app, {
      optional: transformers
    });
  } catch(e) {
    console.log(e);
    process.exit(1);
  }

  app.run();
}
