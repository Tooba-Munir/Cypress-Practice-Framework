// Add your generic utility functions for Cypress here

export function waitForElement(selector, timeout = 10000) {
    cy.get(selector, { timeout });
}

export function clickIfVisible(selector) {
    cy.get('body').then($body => {
        if ($body.find(selector).length) {
            cy.get(selector).click();
        }
    });
}
