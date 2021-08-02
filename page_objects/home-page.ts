import { By } from 'selenium-webdriver';
import { BrowserWrapper } from '../utilities/browser-wrapper';

export class HomePage {

    readonly driver: BrowserWrapper;

    private url = 'https://elias242.wixsite.com/test-store';
    private titleHeader = By.linkText("JOSH'S TEST STORE");

    constructor(browserWrapper: BrowserWrapper) {
        this.driver = browserWrapper;
    }

    // Navigate to this page
    async load() {
        await this.driver.goTo(this.url);
    }

    // Bool function - Is this page currently loaded?
    async IsCurrentlyLoaded(): Promise<boolean> {
        return this.driver.isVisible(this.titleHeader);
    }

}

