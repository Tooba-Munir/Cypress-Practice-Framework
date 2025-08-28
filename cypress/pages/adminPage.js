// Import action functions for interacting with the admin page
import * as actions from '../actions/sampleActions.js';

class AdminPage {
    constructor() {
        // Selector for the Admin page
        this.usernameField = "//label[text()='Username']/../following-sibling::div";
        this.userroleField = "//label[text()='User Role']/../following-sibling::div";
        this.empnameField = "[placeholder='Type for hints...']";
        this.empOption = "//div[@role='option']/span"
        this.statusField = "//label[text()='Status']/../following-sibling::div";
        this.searchBtn = "//button[normalize-space()='Search']";
        this.userroleOption ="//div[@role='listbox']//span[text()='Admin']";
        this.statusOption ="//div[@role='option']/span[text()='Enabled']";
    }

    // Search for existing system users
    searchUser(userName, empName) {
        actions.typeByXpath(this.usernameField, userName);
        actions.clickByXpath(this.userroleField);
        actions.clickByXpath(this.userroleOption);
        actions.typeText(this.empnameField, empName);
        actions.waitByXPath(this.empOption,3000);
        actions.clickByXpath(this.empOption);
        actions.clickByXpath(this.statusField);
        actions.clickByXpath(this.statusOption);
        actions.clickByXpath(this.searchBtn);

    }
}

// Export a singleton instance of the Admin page object
export default new AdminPage();