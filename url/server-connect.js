var http=require('http');
var fs = require("fs");
var server = http.createServer(function(req,res)
{
    fs.readFile("a.html",function(err,data)
{
       res.write(toString());
       res.end();
});
});
server.listen(8080);