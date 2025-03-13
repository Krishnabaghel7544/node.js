var cd=require("readline-sync");
var a=parseInt(cd.question("enter the first number"));
for(i=1; i<=10; i++)
{
    console.log("table "+i*a);
}