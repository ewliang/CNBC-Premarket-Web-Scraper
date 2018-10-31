const puppeteer = require('puppeteer');
const express = require('express');
const app = express();
const port = 4000 || process.env.PORT;
const url = 'https://www.cnbc.com/pre-markets/';

app.get('/', (req, res) => {
  res.send('Welcome to the CNBC Premarket Webscraper!');
});

app.get('/scrape', (req, res) => {
  // Get CNBC Premarket Webpage HTML Document
  let scrape = async () => {
    // Initial Required Setup
    const browser = await puppeteer.launch({
      headless: true,
      args: [`--window-size=720,720`]
    }); // headless: true = no preview mode
    const page = await browser.newPage();
    await page.goto(url);
    await page.waitFor(3000);
    const result = await page.evaluate(() => {
      // Scrape Data
      // DOW
      let changeDOW = document.querySelector('#cnbc-contents > div > section > div.unit.col1 > div > div > table:nth-child(3) > tbody > tr > td.last').textContent;
      let impliedChangeDOW = document.querySelector('#cnbc-contents > div > section > div.unit.col1 > div > div > table:nth-child(4) > tbody > tr > td.last').textContent;
      // SP500
      let changeSP500 = document.querySelector('#cnbc-contents > div > section > div.unit.col1 > div > div.flex_chart.future-chart.last > table:nth-child(3) > tbody > tr > td.last').textContent;
      let impliedChangeSP500 = document.querySelector('#cnbc-contents > div > section > div.unit.col1 > div > div.flex_chart.future-chart.last > table:nth-child(4) > tbody > tr > td.last').textContent;
      // NASDAQ
      let changeNASDAQ = document.querySelector('#cnbc-contents > div > section > div.unit.col1 > div > div > table:nth-child(3) > tbody > tr > td.last').textContent;
      let impliedChangeNASDAQ = document.querySelector('#cnbc-contents > div > section > div.unit.col1 > div > div > table:nth-child(4) > tbody > tr > td.last').textContent;

      return {
        changeDOW,
        impliedChangeDOW,
        changeSP500,
        impliedChangeSP500,
        changeNASDAQ,
        impliedChangeNASDAQ
      }
    });
    return result;
    browser.close();
  };

  scrape().then((value) => {
    console.log('<<<======= [ CNBC PREMARKET DATA ] =======>>>');
    console.log('DOW    === Change ' + value.changeDOW + ' | Implied Change ' + value.impliedChangeDOW);
    console.log('SP500  === Change ' + value.changeSP500 + ' | Implied Change ' + value.impliedChangeSP500);
    console.log('NASDAQ === Change ' + value.changeNASDAQ + ' | Implied Change ' + value.impliedChangeNASDAQ);
  });
});



app.listen(port, () => console.log(`CNBC Premarket Webscraper is listening on Port ${port}`));
