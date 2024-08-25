const {
  setHeadlessWhen,
  setCommonPlugins
} = require('@codeceptjs/configure');
const { output } = require('codeceptjs');
const {
  request
} = require('playwright');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './e2e/*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'http://127.0.0.1:8080',
      show: true
    },
    REST: {
      endpoint: 'http://localhost:3333'
    },
    JSONResponse: {
      requestHelper: 'REST'
    },
    Mochawesome:{
      uniqueScreenshotNames: true

    },

  },
  include: {
    I: './support/steps_file.js',

    taskPage: "./pages/task.js",
  },
 mocha: {
    reporterOptions: {
        reportDir: "output"
    }
  },
  name: 'codeceptjs'
}