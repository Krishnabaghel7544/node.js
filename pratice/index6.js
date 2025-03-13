// non-bloking and cmd run only
var fs=require("fs");
var data =fs.readFile('pagal.txt' ,function(err,data)
{
    if(err)
        throw err;
    console.log(data.toString());
    console.log("program ended");
    console.log("byee");
}
);
console.log("pagal");
