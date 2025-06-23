import fundamentals from "../pages/fundamentals.js";
describe("Testing Fundamentals Page", () => {
    const fundamentalsPage = new fundamentals();
    beforeEach(() => {
        fundamentalsPage.visit();
    });
    
    it("should have the correct main heading", () => {
        fundamentalsPage.assertMainHeader()
    });
});
