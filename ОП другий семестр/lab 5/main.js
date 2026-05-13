
function mapAsyncCallback(array, iteratee, finalCallback) {
    if (array.length === 0) {
        return finalCallback(null, []);
    }

    const results = [];
    let completedCount = 0;
    let hasErrored = false;

    array.forEach((item, index) => {
        iteratee(item, index, (err, mappedItem) => {
            if (hasErrored) return; 

            if (err) {
                hasErrored = true;
                return finalCallback(err);
            }

            results[index] = mappedItem; 
            completedCount++;

            if (completedCount === array.length) {
                finalCallback(null, results);
            }
        });
    });
}




function mapAsyncPromise(array, iteratee, options = {}) {
    return new Promise((resolve, reject) => {
        const { signal } = options;

        if (signal && signal.aborted) {
            return reject(new DOMException("Operation aborted", "AbortError"));
        }

        const abortHandler = () => {
            reject(new DOMException("Operation aborted", "AbortError"));
        };

        if (signal) {
            signal.addEventListener("abort", abortHandler);
        }

        const promises = array.map(async (item, index) => {
            if (signal && signal.aborted) throw new DOMException("Operation aborted", "AbortError");
            return await iteratee(item, index);
        });

        Promise.all(promises)
            .then(results => {
                if (signal) signal.removeEventListener("abort", abortHandler);
                resolve(results);
            })
            .catch(err => {
                if (signal) signal.removeEventListener("abort", abortHandler);
                reject(err);
            });
    });
}

module.exports = {
    mapAsyncCallback,
    mapAsyncPromise
    
};