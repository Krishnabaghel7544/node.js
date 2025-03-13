 var fs=require("fs");
 fs.readFile('pagal.txt',function(err,data)
{
    if(err)
        throw err;
    console.log(data.toString());
});
console.log("program ended");
console.log("byee");