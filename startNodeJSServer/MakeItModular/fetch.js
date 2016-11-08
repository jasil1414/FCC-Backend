var fs = require('fs');
var path = require('path');
 function getFileOnExt(dirname, filterExt, callback){
   var fileList = [];
   fileList = fs.readdir(dirname, function(err, list){
      if(err){
        return callback(err);
    }
    var requiredList =  list.filter(function(listItem){
      if( path.extname(listItem) === ('.'+ filterExt)){
        return (listItem);
      }
     });
     return callback(null, requiredList);
   });
 }
 module.exports = getFileOnExt;
