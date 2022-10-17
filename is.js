export function isArray(value) {
  console.warn('You should use `Array.isArray()`');

  return Array.isArray(value);
}

export function isBoolean(value) {
    return isFalse(value) || isTrue(value);
}

export function isFalse(value) {
    return false === value;
}

export function isFunction(value) {
    return isTypeOf(value, 'function');
}

export function isInstanceOf(value, instance) {
    return value instanceof instance;
}

export function isInteger(value) {
  console.warn('You should use `Number.isInteger()`');

  return Number.isInteger(value);
}

export function isNull(value) {
    return null === value;
}

export function isObject(value) {
    if (!isTypeOf(value, 'object')) {
        return false;
    }

    if (Array.isArray(value)) {
        return false;
    }

    if (isNull(value)) {
        return false;
    }

    return true;
}

export function isString(value) {
    return isTypeOf(value, 'string') || isInstanceOf(value, String);
}

export function isTrue(value) {
    return true === value;
}

export function isTypeOf(value, type) {
   return typeof value === type;
}

export function isUndefined(value) {
    return undefined === value;
}
