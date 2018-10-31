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
      args: [`--window-size=720,720`]
    }); // headless: true = no preview mode
    const page = await browser.newPage();
    await page.goto(url);
    await page.waitFor(3000);
    const result = await page.evaluate(() => {
      // DOW
      let change = document.querySelector('[data-field="change"]').textContent;
      let impliedChange = document.querySelector('[data-field="fv_change"]').textContent;
      return {
        change,
        impliedChange
      }
    });
    return result;
    browser.close();
  };

  scrape().then((value) => {
    console.log('Scraped: ' + value.change + 'xxxxxx' + value.impliedChange);
  });
});



app.listen(port, () => console.log(`CNBC Premarket Webscraper is listening on Port ${port}`));
