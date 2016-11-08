var http = require('http');
var url = process.argv[2];

http.get(url, (res) => {
  res.setEncoding('utf-8');
  var dataStream="";
  res.on('data', (data) =>{
    dataStream +=data;
  });
  res.on('end', () => {
  console.log(dataStream.length);
  console.log(dataStream);
  })
}).on('error', (e) => console.error(`Error : ${e.message}`)
);
