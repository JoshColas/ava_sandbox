import { By } from 'selenium-webdriver';
import { BrowserWrapper } from '../utilities/browser-wrapper';

export class HomePage {

    readonly driver: BrowserWrapper;

    private url = 'https://elias242.wixsite.com/test-store';
    private titleHeader = By.linkText("JOSH'S TEST STORE");
    private minimizedChat = By.id('minimized-chat');
    private chatWindow = By.css("div[aria-label='Chat Messages']");

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

    // TODO: Add scrolling and wait logic to the browser-wrapper class so this function works
    /**
     * Open the Chat Window
     */
    async openChatWindow() {
        let windowAlreadyOpen = await this.chatWindowIsOpen();
        if (windowAlreadyOpen) {
            await this.driver.click(this.minimizedChat);
        }
    }

    /**
     * Is the Chat Window currently open?
     * @returns {boolean}
     */
    async chatWindowIsOpen(): Promise<boolean> {
        try {
            return this.driver.isVisible(this.chatWindow);
        } catch {
            return false;
        }
    }

}

