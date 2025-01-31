const request = require('request');
const cheerio = require('cheerio');
//const chalk = require('chalk');

console.log("Before");

request('https://www.worldometers.info/coronavirus/', function(err, res, html){
    if(err){
        console.log("error: " + err);
    }else{
        //console.log("Status Code: " + res.statusCode);  
        //console.log(html);
        handleHTML(html);
    }
});
console.log("After");
 
function handleHTML(html){
    let selTool = cheerio.load(html);
    //let h1s = selTool('h1');
    let ContentArr = selTool("#maincounter-wrap span");
    for(let i = 0; i < ContentArr.length; i++){
        let data = selTool(ContentArr[i]).text();
        console.log("data " + data);
    }

    //console.log(h1s.length);

}