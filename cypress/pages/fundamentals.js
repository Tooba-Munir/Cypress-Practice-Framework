import * as actions from "../actions/sampleActions.js";
import { BASE_URL } from "../support/utils/urls.js";
class fundamentals {
    constructor() {
        // Add selectors if needed
        this.mainHeaderSelector = "(//h1[text()='Testing Fundamentals'])[1]";
    }

    visit() {
        cy.visit(BASE_URL + '/fundamentals');
    }
    assertMainHeader() {
        actions.assertTextByXpath(this.mainHeaderSelector, 'Testing Fundamentals')
    }

    getTitle() {
        //return cy.get(this.titleSelector);
    }

    getHeader() {
        //return cy.get(this.headerSelector);
    }

    clickButton() {
        //cy.get(this.buttonSelector).click();
    }
}

export default fundamentals;
