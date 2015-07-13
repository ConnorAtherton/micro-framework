import { decorate } from './utils/decorate';

function handleDescriptor() {

}

export default function redirect(route) {
  return decorate(handleDescriptor, arguments);
}
