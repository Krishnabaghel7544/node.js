 var fs=require("fs");
 var cd=require("readline-sync");
 var a=cd.question("enter paragraph");
 fs.writeFileSync('pagal.txt',a);