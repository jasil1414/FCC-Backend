var fs = require('fs');
var loc = process.argv[2];
var buff = fs.readFileSync(loc, "utf-8");
console.log((buff.split('\n')).length-1);
