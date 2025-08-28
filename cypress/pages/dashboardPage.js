// Import action functions for interacting with the dashboard page
import * as actions from '../actions/sampleActions.js';

class DashPage {
    constructor() {
        // Selector for the search box input
        this.searchBox = '[placeholder="Search"]';
        // Selector for the main menu item
        this.menuItem = '.oxd-main-menu-item';
        this.adminOption = '//span[text()="Admin"]';    
    }

    // Types 'Admin' in the search box and asserts the menu item text is 'Admin'
    searchMenu() {
        actions.typeText(this.searchBox, 'Admin');
        actions.assertText(this.menuItem, 'Admin');
    }
    navigateToAdmin(){
        actions.clickByXpath(this.adminOption);
        actions.assertUrl('/admin/viewSystemUsers');
    }
}

// Export a singleton instance of the dashboard page object
export default new DashPage();