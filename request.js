const request = require('request');

console.log("Before");

request('http://www.google.com', function(err, res, body){
    if(err){
        console.log("error: " + err);
    }else{
        console.log("Status Code: " + res.statusCode);  
        console.log(body);
    }
});
console.log("After");