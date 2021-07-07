const dep1 = require('./dep1');
console.log('require dp1', dep1);

module.exports = () => {
    console.log('dep1', dep1);
};
