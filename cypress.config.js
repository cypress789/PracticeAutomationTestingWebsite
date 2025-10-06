const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      allureWriter(on, config); // <-- this enables Allure plugin
      return config;
    },
    baseUrl: 'https://practice.automationtesting.in/',
    specPattern: 'cypress/e2e/**/*.cy.js',
  },
});