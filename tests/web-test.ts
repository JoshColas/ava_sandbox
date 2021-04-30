import anyTest, {TestInterface} from 'ava';
import {BrowserWrapper as webDriver} from '../utilities/browser-wrapper';

require('chromedriver');

const test = anyTest as TestInterface<{driver: webDriver}>

// Initialize a new webdriver before each test
test.beforeEach(async t => {
	t.context = {driver: new webDriver()};
});

// Close the webdriver after each test completes
test.afterEach(async t => {
	t.context.driver.close();
});

// Sanity test to determine if the Webdriver is working
test('Webdriver sanity test', async t => {
	const driver = t.context.driver;
	await driver.goTo('https://elias242.wixsite.com/sandbox');
	let pageTitle = await driver.getTitle()
	t.true(pageTitle == pageTitle);
});

