// import { targets } from "./targets.js";
// import fetch from "node-fetch";
// import * as cheerio from 'cheerio';


// // const loadWebsite = async () => {
// //   try {
// //     const website = await fetch(targets[0].url);
// //   } catch(e) {
// //     console.error(e.message);
// //   }
// // }

// // loadWebsite();

// // const $ = cheerio.get();

const puppeteer = require('puppeteer')
async function loadWebsite() {

  // console.warn(`Hi`)
  // window.open("https://www.imot.bg/");

  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  page.goto('http://imot.bg')
  // const content = await page.content()
  // console.log(content);

};

loadWebsite().catch(console.error)