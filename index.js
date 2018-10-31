const axios = require('axios');
const puppeteer = require('puppeteer');
const express = require('express');
const app = express();
const port = 4000 || process.env.PORT;

app.get('/', (req, res) => {
  res.send('Welcome to the CNBC Premarket Webscraper!');
});

app.get('/scrape', (req, res) => {
  let url = 'https://www.cnbc.com/pre-markets/';
  // Get CNBC Premarket Webpage HTML Document
  axios.get(url)
  .then((response) => {

  })
  .catch((err) => {
    console.log(err);
  });
});

app.listen(port, () => console.log(`CNBC Premarket Webscraper is listening on Port ${port}`));
