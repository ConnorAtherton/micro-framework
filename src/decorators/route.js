import { decorate } from './utils/decorate';

function handleDescriptor() {

}

export default function route() {
  return decorate(handleDescriptor, arguments);
}
