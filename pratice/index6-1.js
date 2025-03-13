// non-bloking and sever run 

var http=require('http');
var fs =require("fs");
var data=http.createServer(function(req,res)
{
    fs.readFile('para.txt', function(err,data)
    {
       if(err)
        throw err;
    res.write(data.toString());
    res.end();
    });
        console.log("program khatam");
        console.log("byee");
});
data.listen(8080);