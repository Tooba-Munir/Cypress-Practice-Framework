// Clicks a button or element using a CSS selector
export const clickButton = (selector) => {
  cy.get(selector).click();
};

// Submits a form using a CSS selector
export const submitBtn = (selector) => {
  cy.get(selector).submit();
};

// Types text into an input using a CSS selector
export const typeText = (selector, data) => {
  cy.get(selector).type(data);
};

// Asserts that an element located by XPath contains the expected text
export const assertTextByXpath = (selector, expectedText) => {
  cy.xpath(selector).should('contain.text', expectedText);
};

// Clicks an element located by XPath
export const clickByXpath = (selector) => {
  cy.xpath(selector).click();
};

// Asserts that visible text on the page matches a regex
export const containsTextRegex = (regex) => {
  cy.contains(regex).should('be.visible');
};

// Types text into an input located by XPath
export const typeByXpath = (selector, data) => {
  cy.xpath(selector).type(data);
};

// Visits a given URL
export const visitPage = (url) => {
  cy.visit(url);
};

// Asserts that the current URL includes the given text
export const assertUrl = (text) => {
  cy.url().should('include', text);
};

// Asserts that an element located by CSS selector has the exact expected text
export const assertText = (element, expectedText) => {
  cy.get(element).should('have.text', expectedText);
};

// Adds explicit wait time
export const wait = (element, time) =>{
  cy.get(element,{timeout: time}).should('be.visible');
}

// Adds explicit wait time using XPath
export const waitByXPath = (element, time) =>{
  cy.xpath(element,{timeout: time}).should('be.visible');
}