const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    experimentalSessionAndOrigin: true, // ✅ Add here
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});