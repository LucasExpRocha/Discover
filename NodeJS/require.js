// Como colocamos um modo nativo do node.js

const path = require('path');

console.log(path.basename(__filename))

const myModule = require('./exports.js')

console.log(myModule)