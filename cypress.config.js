const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:8081", // Set this to your app's dev server URL
    viewportWidth: 375, // Set your preferred screen size
    viewportHeight: 667,
    setupNodeEvents(on, config) {
      // You can add event listeners here if needed
    },
    video: false,
    supportFile: false,
  },
});
