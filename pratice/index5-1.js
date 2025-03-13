 // bloking code and server run only
var http=require('http');
var fs = require("fs");
var a=http.createServer(function(req,res)
{
    var data=fs.readFileSync("para.txt");
     res.write(data.toString());
     res.write("byee");
     res.end();

});
a.listen(8080);