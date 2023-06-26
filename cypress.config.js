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
  
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      return require('@shelex/cypress-allure-plugin/writer')(on, config)
    },
  },
});
