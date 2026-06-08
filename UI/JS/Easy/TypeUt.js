export function isBoolean(value) {
  return value === true || value === false;
}

/**
 * @param {unknown} value
 * @returns {boolean}
 */
export function isNumber(value) {
  return typeof value === "number";
}

/**
 * @param {unknown} value
 * @returns {boolean}
 */
export function isNull(value) {
  return value === null;
}

/**
 * @param {unknown} value
 * @returns {boolean}
 */
export function isString(value) {
  return typeof value === "string";
}

/**
 * @param {unknown} value
 * @returns {boolean}
 */
export function isSymbol(value) {
 return typeof value === 'symbol';
}

/**
 * @param {unknown} value
 * @returns {boolean}
 */
export function isUndefined(value) {
  return value === undefined;
}
