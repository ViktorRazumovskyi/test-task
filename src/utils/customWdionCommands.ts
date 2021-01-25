import {expect} from 'chai';

export const waitAndClick = (uiElement: WebdriverIO.Element) => {
    uiElement.waitForDisplayed();
    uiElement.click();
};
export const waitAndClickWithPause = (uiElement: WebdriverIO.Element, delay: number) => {
    uiElement.waitForDisplayed();
    uiElement.click();
    browser.pause(delay)
};
export const waitAndSetValue = (uiElement: WebdriverIO.Element, value: string) => {
    uiElement.waitForDisplayed();
    uiElement.setValue(value);
};
export const waitAndSetValueWithPause = (uiElement: WebdriverIO.Element, value: string, delay: number) => {
    uiElement.waitForDisplayed();
    uiElement.setValue(value);
    browser.pause(delay)
};
export const waitAndGetText = (uiElement: WebdriverIO.Element) => {
    uiElement.waitForDisplayed();
    return uiElement.getText();
};

export const waitUntilGetTextMatchesExpectedValue = (uiElement: WebdriverIO.Element, expectedText: string, errorMessage?: string) => {
    try {
        browser.waitUntil(() => uiElement.getText().toLowerCase() === expectedText);
    } catch (error) {
        expect(uiElement.getText()).eqls(expectedText, errorMessage);
    }
};

// doesn't return error exception as common waitForDisplayed, only true or false
export const waitForDisplayedTimeout = (uiElement: WebdriverIO.Element, timeout?: number) => {
    if (!timeout) {
        timeout = 10000;
    }
    try {
        uiElement.waitForDisplayed({
            timeout,
        });
        return true;
    } catch (err) {
        return false;
    }
};
