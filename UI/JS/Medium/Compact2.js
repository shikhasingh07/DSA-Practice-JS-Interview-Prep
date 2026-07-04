function compact(value) {
    if (typeof value !== 'object' || value === null) {
        return value;
    }

    if (Array.isArray(value)) {
        return value
            .map(item => compact(item))  // recursively compact karo
            .filter(Boolean);
    }

    let obj = {};
    Object.entries(value).forEach(([key, val]) => {
        if (val) {
            obj[key] = compact(val);
        }
    });
    return obj
}