const { odd, even } = require('./const');
const checkNum = require('./function');

const checkStringOddEven = (str) => {
    if (str.length % 2) {
        return odd;
    } else {
        return even;
    }
};

console.log(checkNum(10));
console.log(checkStringOddEven('hello'));
