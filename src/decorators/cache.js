import { decorate } from './utils/decorate';
import { cache } from 'node-cache';

function handleDescriptor() {

}

export default function cache() {
  return decorate(handleDescriptor, arguments);
}
