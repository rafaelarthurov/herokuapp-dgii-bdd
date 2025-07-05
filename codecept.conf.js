const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './tests/features/*.feature',
  output: './output',
  helpers: {
    Playwright: {
      url: 'http://the-internet.herokuapp.com',
      show: false,
      browser: 'chromium'
    }
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    allure: {
      enabled: true,
      require: '@codeceptjs/allure-legacy',
      outputDir: 'output',
      stripANSI: true
    }
  },
  gherkin: {
  features: './tests/features/*.feature',
  steps: ['./tests/steps/login.steps.js']
},
  include: {},
  name: 'dgii-login-automation'
};