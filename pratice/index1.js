var http=require('http');
var a=http.createServer(function(req,res)
{
    res.write("hello pagal");
    res.write("program ended");
    res.end();
});
a.listen(8080);