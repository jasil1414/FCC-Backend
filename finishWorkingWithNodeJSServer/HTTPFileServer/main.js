var http = require('http');
var fs = require('fs');
var loc = process.argv[3];
var port = process.argv[2];
var server = http.createServer(function(req, res){
  res.writeHead(200,{'Content-Type':'text/plain'});
  var readStream = fs.createReadStream(loc, 'utf-8');
  readStream.pipe(res);
})
server.listen(port);
