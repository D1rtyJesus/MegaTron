const fs = require('node:fs');

async function processHugeFile() {
    let totalLength = 0

    const stream = fs.createReadStream('big-data.txt', { encoding: 'utf8' });

    for await (const chunk of stream) {

        totalLength += chunk.length

    }

    console.log(totalLength)
}

processHugeFile() 