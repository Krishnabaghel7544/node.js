var cd=require("readline-sync");
var a=parseInt(cd.question("enter no factorial"));
var f=1;
for(i=1; i<=a; i++)
{
    f=f*i;
}
console.log("factorial is "+f);