import { decorate } from './utils/decorate';
// TODO: find a way to attach things back to the app
// object
// key: __middleware__
import { app } from 'micro/app';

function handleDescriptor() {

}

//
// Sorted into the order they were given in the
// decorator
//
// e.g. @middleware('authed, tune')
//
//
function getMiddlewareFunctions() {
  let middlewareObj = {};

  app.__middleware__.forEach(function() {

  })
}

export default function middleware(functions) {
  return decorate(handleDescriptor, arguments);
}
