import { Builder, WebDriver } from 'selenium-webdriver';

require('chromedriver');

// Wrapper class for Selenium Webdriver (Defaulting to Chrome for now)
export class BrowserWrapper {
    driver: WebDriver;

    // Initialize chromedriver upon instantiation
    constructor() {
        this.driver = new Builder().forBrowser('chrome').build();
    }

    // Navigate to the passed string
    public async goTo(url: string) {
        await this.driver.get(url);
    }

    // Close the webdriver
    public async close() {
        await this.driver.close();
    }

    // Get the current page title
    public async getTitle(): Promise<string> {
        return this.driver.getTitle();
    }
}