const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  watchForFileChanges: false,
  video: false,
  screenshotOnRunFailure: false,

  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/results',
    overwrite: false,
    html: false,
    json: true,
  },

  env: {
    allure: true, 
    allureResultsPath: "allure-results",
    apiUrl: "https://api.robotemi.com/api/v2/"
  },
  
  e2e: {
    baseUrl: "https://center.robotemi.com/",
    setupNodeEvents(on, config) {
      // return require('@shelex/cypress-allure-plugin/writer')(on, config)
      allureWriter(on, config);
      return config;
    },
  },
});
