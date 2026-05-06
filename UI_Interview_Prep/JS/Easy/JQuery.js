function $(selector) {
    const el = document.querySelector(selector);

    return {
        css(property, value) {
            if (value === undefined) {
                if (el === null) return undefined;
                const val = el.style[property];
                return val === '' ? undefined : val;
            }
            if (typeof property === 'object') {
                for (const key of Object.keys(property)) {
                    el.style[key] = property[key];
                }
                return this;
            }

            if (el !== null) {
                el.style[property] = value;
            }
            return this;
        }
    };
}

console.log($('button').css('color'); )