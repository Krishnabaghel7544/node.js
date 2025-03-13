var fs = require("fs");  
  
fs.readFile('Para.txt', function (err, data) {  
    if (err) 
throw err;  
    console.log(data.toString());  
});  
console.log("Program Ended"); 
console.log("Byee"); 