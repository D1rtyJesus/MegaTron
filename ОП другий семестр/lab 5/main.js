
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

module.exports = {
    mapAsyncCallback,
};