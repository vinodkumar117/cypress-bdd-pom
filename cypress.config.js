const { defineConfig } = require("cypress");

const preprocessor = require("@badeball/cypress-cucumber-preprocessor")

const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify")


async function setupNodeEvents(on, config) {
  
  await preprocessor.addCucumberPreprocessorPlugin(on,config)

    on("file:preprocessor", browserify.default(config))
    require('cypress-mochawesome-reporter/plugin')(on);

    return config;

}

module.exports = defineConfig({
  projectId: '61nf1j',
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  
  e2e: {
    setupNodeEvents(on, config) {
      
      // implement node event listeners here
    },
    setupNodeEvents,
    //baseURL:'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
    //specPattern: 'cypress/e2e/*.js',
    specPattern: 'cypress/e2e/BDD/features/*.feature',
    watchForFileChanges:false,
    pageLoadTimeout:120000,
    defaultCommandTimeout:30000
  },
});
