const request = require('request');
const cheerio = require('cheerio');

let url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/ball-by-ball-commentary";

request (url, cb);

function cb(err, response, html){
    if(err){
        console.log("error: " + err);
    }else{
        extractHTML(html);
    }
}

function extractHTML(html){
    let $ = cheerio.load(html);
    let elemsArr = $(".ds-text-typo-mid1 .ci-html-content");
    let text = $(elemsArr[0]).text();
    let htmldata = $(elemsArr[0]).html();
    console.log("text: " + text);
    console.log("html: " + htmldata);
     
}