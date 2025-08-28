import * as actions from '../actions/sampleActions.js';
import AdminPage from '../pages/adminPage.js';
import DashPage from '../pages/dashboardPage.js';

// Test suite for the Dashboard Page
describe("Testing Dashboard Page", () => {
    /**
     * Variable to store test data loaded from fixture.
     * Used for credentials and other test-specific data.
     * @type {*}
     */
    let testData;

    // Load fixture data before all tests
    before(() => {
        cy.fixture('data').then((data) => {
            testData = data;
        });
    });

    // Log in before each test and assert the URL includes '/dashboard'
    beforeEach(() => {
        cy.Login(testData.username, testData.password);
    // Set english language in localStorage
    cy.window().then((win) => {
      win.localStorage.setItem('language', 'en');
    });
        actions.assertUrl('/dashboard');
   
    });

    // Test: Search for 'Admin' in the dashboard menu and assert result
    it("search menu", () => {
        DashPage.searchMenu();
    });
    it("search user from admin page",()=>{
        DashPage.searchMenu();
        DashPage.navigateToAdmin();
        AdminPage.searchUser(testData.username,testData.empName);

    })
});