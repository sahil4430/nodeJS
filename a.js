// var http = require('http');
// http.createServer(function(req,res){
//     res.writeHead(200,{'content-type':'text/html'})
//     res.end("<marquee>hello</marquee>");
// }).listen(2004);

var http= require('http');
var c= require('./new.js')
http.createServer(function(req,res){
    res.writeHead(200,{'Content-type':'text/html'})
   
    res.write(c.MYdt());
    res.end()
}).listen(3005)