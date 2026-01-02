const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    experimentalSessionAndOrigin: true, // ✅ Add here
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      // handle screenshot on fail
      on('after:screenshot', (details) => {
        console.log('Screenshot taken:', details.path)
      })
    },
    screenshotsFolder: 'cypress/screenshots',
    videosFolder: 'cypress/videos',
    video: true,
    screenshotOnRunFailure: true,
  },
};