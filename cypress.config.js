require('dotenv').config();
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 20000,
  pageLoadTimeout: 20000,
  chromeWebSecurity: true,
  video: true,
  trashAssetsBeforeRuns: true,
  numTestsKeptInMemory: 5,
  videoCompression: false,
  browser: "chrome",
  chromeExecutable: "/usr/bin/chromium-browser",
  chromeArgs: [
    "--no-sandbox",
    "--disable-gpu",
    "--disable-dev-shm-usage",
    "--headless",
    "--disable-software-rasterizer",
    "--disable-backgrounding-occluded-windows",
    "--disable-renderer-backgrounding",
    "--remote-debugging-address=0.0.0.0",
    "--remote-debugging-port=9222",
  ],
  env: {
    URL: process.env.CYPRESS_URL,
    USERNAME: process.env.CYPRESS_USERNAME,
    PASSWORD: process.env.CYPRESS_PASSWORD,
  },
  e2e: {
    experimentalMemoryManagement: true,
    experimentalRunAllSpecs: true,
    setupNodeEvents(on, config) {

    },
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
  }
});
