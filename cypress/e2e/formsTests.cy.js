import forms from "../pages/forms.js";
describe("Testing Forms Page",()=>{
    beforeEach(()=>{
        forms.visit();
    })

    it("Testing the form submission",()=>{
        forms.successFulSubmission();
    })
})