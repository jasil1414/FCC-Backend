var express = require('express');
var bodyparser = require('body-parser');

var app = express();

var urlencodedParser = bodyparser.urlencoded({extended:false});

app.post('/form', urlencodedParser, function(req,res){
  res.send(req.body.str.split('').reverse().join(''));
})
app.listen(process.argv[2]);
