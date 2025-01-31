const fs = require('fs');

console.log("Before");
//let data = fs.readFileSync('f1.txt');
fs.readFile('f1.txt', function(err, data){
    if(err){
        console.log(err);
    }else{
        console.log("" + data);
    }
});
//console.log("" + data);
console.log("After");