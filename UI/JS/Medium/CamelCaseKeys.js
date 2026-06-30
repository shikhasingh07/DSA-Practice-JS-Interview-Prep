function camelCase(str) {
    return str
        .toLowerCase()
        .replace(/([_])([a-z])/g, (_match, _p1, p2) => p2.toUpperCase());
}

function camelCaseKeys(obj) {
    if (obj === null || typeof obj !== 'object') return obj;

    if (Array.isArray(obj)) {
        return obj.map((item) => camelCaseKeys(item))
    }

    if (typeof obj === 'object') {
        const result = {};
        for (let key in obj) {
            result[camelCase(key)] = camelCaseKeys(obj[key]);
        }
        return result;

    }
}