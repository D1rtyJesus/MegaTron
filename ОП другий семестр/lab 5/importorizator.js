import { mapAsyncCallback, mapAsyncPromise } from './main.js';

const delay = (ms) => new Promise(res => setTimeout(res, ms));

const data = [1, 2, 3, 4, 5];


console.log(" Старт Demo 1 (Callback) ");
mapAsyncCallback(
    data,
    (item, index, cb) => {
        setTimeout(() => {
            cb(null, item * 10);
        }, 500);
    },
    (err, results) => {
        if (err) console.error("Callback Error:", err);
        else console.log("Callback Results:", results); 
    }
);

async function runPromiseDemo() {
    console.log(" Старт Demo 2 (Promise) ");
    try {
        const results = await mapAsyncPromise(
            data,
            async (item) => {
                await delay(1000); 
                return item * 20;
            }
        );
        console.log("Promise Results:", results); 
    } catch (err) {
        console.error("Promise Error:", err.message);
    }
}

async function runAbortDemo() {
    console.log(" Старт Demo 3 (Abort) ");
    const controller = new AbortController();
    
    setTimeout(() => {
        console.log("Біп біп");
        controller.abort();
    }, 500);

    try {
        const results = await mapAsyncPromise(
            data,
            async (item) => {
                await delay(2000); 
                return item * 100;
            },
            { signal: controller.signal }
        );
        console.log("Abort Demo Results:", results);
    } catch (err) {
        console.error("ГГ ВП", err.message); 
    }
}

// Watch demo
(async () => {
    await runPromiseDemo();
    await runAbortDemo();
})();