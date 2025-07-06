export const clickButton = (selector) => {
  cy.get(selector).click();
};

export const submitBtn = (selector) => {
  cy.get(selector).submit();
};

export const typeText = (selector,data)=>{
  cy.get(selector).type(data);
}

export const assertTextByXpath = (selector, expectedText) => {
  cy.xpath(selector).should('contain.text', expectedText);
}

export const clickByXpath = (selector) => {
  cy.xpath(selector).click();
}
export const containsTextRegex = (regex) => {
  cy.contains(regex).should('be.visible');
}

export const typeByXpath = (selector, data) => {
  cy.xpath(selector).type(data);
}

export const visitPage = (url) =>{
  cy.visit(url);
}