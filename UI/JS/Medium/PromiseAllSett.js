function promiseAllSettled(promises) {
    return new Promise((resolve) => {

        if (promises.length === 0) {
            resolve([]);
        }

        const results = [];
        let settled = 0;

        promises.forEach((promise, i) => {
            Promise.resolve(promise).then(value => {
                results[i] = { status: 'fulfilled', value };
                settled++;
                if (settled === promises.length) resolve(results);
            }).catch(err => {
                results[i] = { status: 'rejected', reason: err };
                settled++;                                          // ← missing!
                if (settled === promises.length) resolve(results);
            })
        })
    })
}