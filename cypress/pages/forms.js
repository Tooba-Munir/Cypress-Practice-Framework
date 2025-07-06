import * as actions from "../actions/sampleActions.js";
class formsPage{
    constructor(){
        this.emailInputSelector = '#\\:Rdmmja\\:';
        this.dataEmail = "abc@gmail.com";
        this.submitBtn="//button[text()='Subscribe']";
    }
    visit(){
        actions.visitPage('/forms');
    }
    successFulSubmission(){

        actions.typeText(this.emailInputSelector, this.dataEmail);
        actions.clickByXpath(this.submitBtn);
        actions.containsTextRegex(new RegExp(`Successfully subbed: ${this.dataEmail}!`, 'i'));


    }
}
export default new formsPage();