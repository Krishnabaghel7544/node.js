var http=require('http');
var fs=require("fs");
var a=http.createServer(function(req,res)
{
    var b=fs.readFileSync("stu.txt");
    res.write(b.toString());
    res.end();
});
a.listen(8080);