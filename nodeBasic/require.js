console.log('require 제일 위에 오지 않아도 됨');

module.exports = '나';
require('./const');

console.log(require.cache);
