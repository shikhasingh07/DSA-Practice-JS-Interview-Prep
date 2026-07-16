function deepSet(obj, path, value) {
    const keys = path.split('.');

    let current = obj;

    for (let i = 0; i < keys.length - 1; i++) {
        const key = keys[i];
        const nextKey = keys[i + 1];

        // agar current[key] exist nahi karta ya primitive hai
        if (current[key] == null || typeof current[key] !== 'object') {
            current[key] = isNaN(nextKey) ? {} : [];
        }

        current = current[key];
    }

    // last key pe value set karo
    current[keys[keys.length - 1]] = value;
}