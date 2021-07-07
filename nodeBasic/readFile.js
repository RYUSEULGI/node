const fs = require('fs').promises;

// promise가 붙지 않을 경우
fs.readFile('./readme.txt', (err, data) => {
    if (err) {
        throw err;
    }
    console.log(data);
    console.log(data.toString());
});

// promise 방식
fs.readFile('./readme.txt')
    .then((data) => console.log(data.toString()))
    .catch((err) => console.log(err));
