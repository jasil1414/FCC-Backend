var getFileOnExt = require('./fetch');

var dir = process.argv[2];
var ext = process.argv[3];

getFileOnExt(dir, ext, function(err, data){
  if(err){
   return  console.error('There was an error:', err);

  }
  else{
    //console.log(data);
    data.forEach(function(file){
      console.log(file);
   });
  }
});
