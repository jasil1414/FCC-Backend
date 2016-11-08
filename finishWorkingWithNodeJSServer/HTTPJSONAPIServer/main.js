var http = require('http');
var url = require('url');

function parseTime(time){
  return {
    "hour": time.getHours(),
    "minute":time.getMinutes(),
    "second":time.getSeconds()
  }
}
function unixTime(time){
  return {
    "unixtime":time.getTime()
  }
}
var parsetimeRegX = /^\/api\/parsetime/;
var unixTimeRegX = /^\/api\/unixtime/;
var server = http.createServer(function(req, res){
  if(req.method !== 'GET'){
    return res.end('error');
  }
  var urlObj = url.parse(req.url, true);
  var time = new Date(urlObj.query.iso);
  if(parsetimeRegX.test(req.url)){
    res.writeHead(200,{"Content-Type":"application/json"});
    res.end(JSON.stringify(parseTime(time)));
  }
  else if(unixTimeRegX.test(req.url)){
    res.writeHead(200,{"Content-Type":"application/json"});
    res.end(JSON.stringify(unixTime(time)));
    }
});
server.listen(process.argv[2]);
