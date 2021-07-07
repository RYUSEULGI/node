const { odd, even } = require('./const');

const checkOddEven = (num) => {
    if (num % 2) {
        return odd;
    } else {
        return even;
    }
};

module.exports = checkOddEven;
