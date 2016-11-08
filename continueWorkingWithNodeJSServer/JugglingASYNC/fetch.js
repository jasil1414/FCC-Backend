var http = require('http');
module.exports = function(url){
  return new Promise(function(resolve, reject){
    http.get(url, function(res){
      res.setEncoding('utf-8');
      var dataStream="";
      res.on('data', (data) =>{
       dataStream +=data;
      })
      res.on('end',() =>{
        return resolve(dataStream);
      })
      res.on('error', (error)=>{
       return reject(data);
      })
    })
  })
}
