const puppeteer = require("puppeteer");
const { createObjectCsvWriter }= require("csv-writer");

async function page(){
const browser = await puppeteer.launch({ 
    headless: true 
});
const newsPage = await browser.newPage();

await newsPage.goto('https://www.bbc.com');
await newsPage.waitForSelector("h2.sc-feaf8701-3.eQumHa");

const headlines = await newsPage.evaluate(function(){
    const buffer =[];
    const headers = document.querySelectorAll("h2.sc-feaf8701-3.eQumHa");
    headers.forEach(header => {
        buffer.push(header.innerText);
    });
    return buffer;
});
console.log("Returning ", headlines.length, "headlines");
await browser.close();
const csvWriter = createObjectCsvWriter({
    path:'./data/headlines.csv',
    header:[
        {id: "id", title: "ID"},
        {id: "headline", title: "Headline"},
        {id: "timestamp", title: "Timestamp"}
    ]
});
const saved = headlines.map((headline, number) =>({
    id: number +1,
    headline: headline,
    timestamp: new Date().toLocaleString()
}));
await csvWriter.writeRecords(saved);
console.log("Saved Successfully");
}
page();
