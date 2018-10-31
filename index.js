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
      headless: false,
      args: [`--window-size=411,731`]
    }); // headless: true = no preview mode
    const page = await browser.newPage();
    await page.setViewport({ width: 411, height: 731 });
    await page.goto(url);
    await page.waitFor(3000);
    const result = await page.evaluate(() => {
      return document.querySelector('.future-chart').textContent;
    });
    return result;
    //browser.close();
  };

  scrape().then((value) => {
    console.log('k ' + value);
  });
});



app.listen(port, () => console.log(`CNBC Premarket Webscraper is listening on Port ${port}`));
