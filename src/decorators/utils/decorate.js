//
// Util function for creating the decorators
//
// credit to jay phelps:
// https://github.com/jayphelps/core-decorators.js/blob/master/src/private/utils.js
//
function isDescriptor(desc) {
  if (!desc || !desc.hasOwnProperty) {
    return false;
  }

  const keys = ['value', 'get', 'set'];

  for (const key of keys) {
    if (desc.hasOwnProperty(key)) {
      return true;
    }
  }

  return false;
}

export function decorate(handleDescriptor, entryArgs) {
  if (isDescriptor(entryArgs[entryArgs.length - 1])) {
    return handleDescriptor(...entryArgs, []);
  } else {
    return function () {
      return handleDescriptor(...arguments, entryArgs);
    };
  }
}
