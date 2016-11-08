var fs = require('fs');
var loc = process.argv[2];
fs.readFile(loc, "utf-8", function(err, data){
  if(err){
    return console.log(err);
  }
  console.log((data.split('\n')).length-1);
});
