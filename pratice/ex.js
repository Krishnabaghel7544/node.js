// wap that read a paragraph from user and save in a file stu.txt;
var cd=require("readline-sync");
var fs=require("fs");
 var a=cd.question("enter paragraph");
 fs.writeFileSync("pagalgirl.txt",a);
 

