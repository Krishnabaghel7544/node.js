var fs=require("fs");
var http=require('http');
var a=http.createServer(function(req,res)
{
    var b=fs.readFile('stu.txt' , function(err,data)
{
  if(err)
    throw err;
res.write(data.toString());
res.end();
});
});
a.listen(8088);