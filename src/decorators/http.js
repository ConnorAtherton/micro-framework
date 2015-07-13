import { decorate } from './utils/decorate';

function handleDescriptor() {

}

export default function http(methods) {
  return decorate(handleDescriptor, arguments);
}
