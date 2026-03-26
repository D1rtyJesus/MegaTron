
if (cache.size >= maxSize) {
    
    if (strategy === "LRU") {
        const oldestKey = cache.keys().next().value;
        cache.delete(oldestKey);
        
    } else if (strategy === "LFU") {
        let minCount = Infinity;
        let lfuKey = null;
        
        for (const [key, record] of cache) {
            if (record.count < minCount) {
                minCount = record.count;
                lfuKey = key;
            }
        }
        cache.delete(lfuKey);
    }
}

cache.set(key, { value: result, count: 1 });