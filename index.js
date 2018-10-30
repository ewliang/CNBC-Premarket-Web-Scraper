const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');
const app = express();
const port = 4000 || process.env.PORT;

app.get('/', (req, res) => {
  res.send('Welcome to the CNBC Premarket Webscraper!');
});

app.get('/scrape', (req, res) => {
  let url = 'https://www.cnbc.com/pre-markets/';
  
});

app.listen(port, () => console.log(`CNBC Premarket Webscraper is listening on Port ${port}`));
