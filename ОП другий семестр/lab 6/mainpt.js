const fs = require('node:fs');

const stream = fs.createReadStream('big-data.txt', { encoding: 'utf8' });

let totalLength = 0


for await (const chunk of stream) {

totalLength += chunk.length

}

console.log(totalLength) 