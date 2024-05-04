// var http = require('http'); 
// var fs = require('fs');
// http.createServer(function (req, res) { 
//    fs.readFile('a.html', function(err, data) { 
//       res.writeHead(200, {'Content-type': 'text/html'}); 
//       res.write(data);           
//       return res.end(); 
//     }); 
//  }).listen(5000);

// var fs = require('fs');
//  fs.unlink('new.html',function(err){
//  if (err) throw err;
//  console.log("deleted")
//  })

// var fs = require('fs');
// fs.rename('a.html','abc.html',function (err){
//    if(err) throw err;
//    console.log("renamed")
// })

var fs= require('fs');
fs.appendFile('new.html', function(err){
   if (err) throw err;
   console.log(" create new html file");
});