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
    allureResultsPath: "test-allure-results",
  },
  
  e2e: {
    setupNodeEvents(on, config) {
      // return require('@shelex/cypress-allure-plugin/writer')(on, config)
      allureWriter(on, config);
      return config;
    },
  },
});
