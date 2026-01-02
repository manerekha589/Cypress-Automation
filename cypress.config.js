const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://staging-client.dokshop.com",
    setupNodeEvents(on, config) {
      // Node events go here
    }
  },

  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: true,
    json: true
  },

  screenshotsFolder: "cypress/screenshots",
  videosFolder: "cypress/videos",
  video: true
});
