import { By, Builder, WebDriver, WebElement } from 'selenium-webdriver';

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

    /**
     * Is the passed element visible?
     * @param selector 
     * @returns {Promise<boolean>}
     */
    public async isVisible(selector: By): Promise<boolean> {
        let element;
        try {
            element = await this.getElement(selector);
        } catch (e) {
            // Determining visibility doesn't require that the element be in the DOM
            return false;
        }
        let isVisible = await element.isDisplayed();
        return isVisible;
    }

    /**
     * Uses the passed selector to return a WebElement
     * @param selector 
     * @returns {Promise<WebElement>}
     */
    private async getElement(selector: By): Promise<WebElement> {
        try {
            let element = await this.driver.findElement(selector);
            return element;
        } catch (error) {
            await this.driver.close();
            throw new Error('Selenium failed to find an element using selector ' + selector);
        }
    }

    /**
     * Click an element using the passed selector
     * @param selector 
     */
    async click(selector: By) {
        let element = await this.getElement(selector);
        let isVisible = await this.isVisible(selector);

        if(isVisible) {
            await element.click();
        } else {
            throw new Error('Selenium was unable to find a visible element for selector ' + selector);
        }
    }

}