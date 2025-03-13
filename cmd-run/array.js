var cd=require("readline-sync");
var n = parseInt(cd.question("enter size of array"));
var a = new Array(n);
for(i=1; i<=n; i++)
{
    a[i]=parseInt(cd.question());
}
var s=0;
for(i=1; i<=n; i++)
{
    s=s+a[i];
}
console.log("sum is "+s);


