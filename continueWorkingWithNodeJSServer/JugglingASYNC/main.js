var http = require('http');

var fetch = require('./fetch.js');

Promise.all([
  fetch(process.argv[2]),
  fetch(process.argv[3]),
  fetch(process.argv[4])
]).then(function(data){
  console.log(data[0]);
  console.log(data[1]);
  console.log(data[2]);
}).catch((err)=>{
  console.error('Retrieval Error:', err);
})
