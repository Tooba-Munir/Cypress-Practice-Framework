import * as actions from "../actions/sampleActions.js";
class fundamentals {
    constructor() {
        // Add selectors if needed
        this.mainHeaderSelector = "(//h1[text()='Testing Fundamentals'])[1]";
        this.firstParagraphSelector = "(//div[contains(@class,'MuiAccordionSummary') and @id='panel1a-header'])[1]";

    }

    visit() {
        actions.visitPage('/fundamentals');
    }
    assertMainHeader() {
        actions.assertTextByXpath(this.mainHeaderSelector, 'Testing Fundamentals')
    }
    checkAccordianLogic(){
        actions.clickByXpath(this.firstParagraphSelector);
        actions.containsTextRegex(/Your tests will exist in a/i);
    }
}

export default fundamentals;
