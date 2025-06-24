export const clickButton = (selector) => {
  cy.get(selector).click();
};

export const fillForm = (selector, data) => {
  cy.get(selector).type(data);
};

export const submitForm = (selector) => {
  cy.get(selector).submit();
};

export const assertTextByXpath = (selector, expectedText) => {
  cy.xpath(selector).should('contain.text', expectedText);
}

export const clickByXpath = (selector) => {
  cy.xpath(selector).click();
}
export const containsTextRegex = (regex) => {
  cy.contains(regex).should('be.visible');
}