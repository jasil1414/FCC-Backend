var express = require('express');
var fs = require('fs');
var app = express();

app.get('/books', function(req,res){
fs.readFile(process.argv[3], 'utf-8', function(err,data){
    if(err){
      return console.log(err)
    }
    res.json(JSON.parse(data));
    res.end();
  });
})
app.listen(process.argv[2]);
