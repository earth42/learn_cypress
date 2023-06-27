const { defineConfig } = require("cypress");

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
    // allureResultsPath: "test-allure-results",
  },
  
  e2e: {
    setupNodeEvents(on, config) {
      return require('@shelex/cypress-allure-plugin/writer')(on, config)
    },
  },
});
