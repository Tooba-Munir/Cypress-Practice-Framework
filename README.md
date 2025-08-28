# Cypress Practice Framework

A modern, maintainable Cypress framework leveraging the Page Object Model (POM) and modular utilities.

## Overview

This project provides a robust structure for end-to-end testing with Cypress, focusing on scalability and code reuse.

## Directory Structure

```
cypress/
  e2e/
    *.cy.js                # Test specifications
  pages/
    *.js                   # Page Object classes
  support/
    commands.js            # Custom commands
    e2e.js                 # Global setup (e.g., plugins, XPath)
    utils/
      *.js                 # Utilities (URLs, helpers, etc.)
cypress.config.js          # Cypress configuration
README.md                  # Project documentation
```

## Key Features

- **Page Object Model:** Organize selectors and actions per page for maintainability.
- **Custom Commands:** Extend Cypress with reusable commands.
- **Utility Modules:** Centralize helpers and configuration (e.g., URLs).
- **Global Plugins:** Support for plugins like `cypress-xpath` out of the box.

## Getting Started

1. Install dependencies:
   ```sh
   npm install
   ```
2. (Optional) Add plugins as needed, e.g.:
   ```sh
   npm install -D cypress-xpath
   ```
3. Run tests:
   ```sh
   npx cypress open
   ```

## Writing Tests

- Place test files in `cypress/e2e/`.
- Use page objects from `cypress/pages/` for clear, maintainable tests.
- Import and use utility functions as needed.

## Example Test

// Example using a page object from the new structure
import LoginPage from '../pages/LoginPage';
```
describe('Login Page', () => {
  const loginPage = new LoginPage();

  beforeEach(() => {
    loginPage.visit();
  });

  it('logs in with valid credentials', () => {
    loginPage.enterUsername('user');
    loginPage.enterPassword('password');
    loginPage.submit();
    loginPage.assertLoginSuccess();
  });
});
```