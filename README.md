# CNBC-Premarket-Web-Scraper
A web scraper created using Puppeteer library on the backend to scrape the stock market prediction data off of CNBC's premarket page.

# Setup and Requirements
- Node.js
- NPM

1. Clone the repository at [https://github.com/ewliang/CNBC-Premarket-Web-Scraper](https://github.com/ewliang/CNBC-Premarket-Web-Scraper)
2. Unzip the file if needed.
3. Run ```npm install``` in the folder root directory where package.json is located
4. Run ```npm run dev``` to start.
5. Begin scrape by typing into your browser ```localhost:4000/scrape``` and the scraping process will begin. No page will load, so disregard any browser error messages that show up. The scraped data will show up in the console window via console.log().

# FAQs
**Why is Puppeteer used instead of Cheerio?**
- Despite the performance benefits gained from using Cheerio, Cheerio was not used due to its lack of proper support for client side rendered pages built on SPAs like React.js, which in this case the CNBC site is built off of.

# Author
Eric Liang
- Website [https://www.eric-liang.com](https://www.eric-liang.com)
- Github [https://www.github.com/ewliang](https://www.github.com/ewliang)

# License
This program is protected by the GPLv3 license.
