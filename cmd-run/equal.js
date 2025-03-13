var cd = require("readline-sync");
var a=parseInt(cd.question("enter first no"));
var b=parseInt(cd.question("enter second no"));
if(a==b)
{
    console.log("equal");
}
else{
    console.log("not equal");
}