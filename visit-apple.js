const {By, Builder} = require('selenium-webdriver');
const {suite} = require('selenium-webdriver/testing');
const assert = require("assert");

suite(function (env) {
  describe('WebPerf stats for apple.com', function () {
    let driver;

    before(async function () {
      driver = await new Builder().forBrowser('safari').build();
    });

    after(async () => await driver.quit());

    it('Visit apple.com', async function () {
      await driver.get('https://www.apple.com');

      let title = await driver.getTitle();
      assert.equal("Apple", title);

      await driver.manage().setTimeouts({implicit: 500});
    });
  });
});
