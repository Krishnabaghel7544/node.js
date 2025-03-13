// create a module;
module.exports.fact=function (a)
 { 
    var f=1;
    var i;
    for(i=1; i<=a; i++)
    {
        f =f*i
        return f;
    }
  }