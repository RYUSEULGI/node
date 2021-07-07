const fs = require('fs');

const readStream = fs.createReadStream('./readme.txt', { highWaterMark: 16 });
const data = [];

readStream.on('data', (chunk) => {
    data.push(chunk);
    console.log('data : ', chunk, chunk.length);
});

readStream.on('end', () => {
    console.log('end : ', Buffer.concat(data).toString());
});

readStream.on('err', (err) => {
    console.log('err : ', err);
});

const writeStream = fs.createWriteStream('./write.txt');

writeStream.on('finish', () => console.log('파일작성'));
writeStream.write('한번 더 작성');
writeStream.end();

const doubleStream = fs.createWriteStream('./write2');
writeStream.pipe(doubleStream);
