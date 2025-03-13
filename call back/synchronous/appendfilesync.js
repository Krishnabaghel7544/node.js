var fs=require("fs");
var cd=require("readline-sync");
var data=cd.question("enter heading");
fs.appendFileSync("pagal-boy.txt",data.toString());