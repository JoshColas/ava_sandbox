import anyTest, {TestInterface} from 'ava';
import {BrowserWrapper as webDriver} from '../utilities/browser-wrapper';
import {HomePage} from '../page_objects/home-page';

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
	
	// Setup
	const driver = t.context.driver;
	const homePage = new HomePage(driver);
	
	// Action
	await homePage.load();
	
	// Assertion
	t.true(await homePage.IsCurrentlyLoaded());
});

