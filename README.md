# Cypress Practice Framework

This project is a clean, scalable Cypress Page Object Model (POM) based framework.

## Project Structure

```
cypress/
  e2e/
    tests.cy.js            # Example test file
  pages/
    fundamentals.js        # Page Object for Fundamentals page
  support/
    commands.js            # Custom Cypress commands
    e2e.js                 # Global support file (loads cypress-xpath)
    utils/
      urls.js              # Centralized URLs (e.g., BASE_URL)
      genericFunctions.js  # Generic utility functions for tests
cypress.config.js          # Cypress configuration
README.md                  # Project documentation
```

## Key Features
- **Page Object Model (POM):** All page-specific logic is encapsulated in the `pages/` folder.
- **Reusable Actions:** Common actions and assertions are in `actions/sampleActions.js`.
- **Generic Functions:** Utility functions for use across tests in `support/utils/genericFunctions.js`.
- **Centralized URLs:** All base URLs and endpoints in `support/utils/urls.js`.
- **Global XPath Support:** `cypress-xpath` is enabled in `support/e2e.js` for XPath selectors.

## Setup
1. Install dependencies:
   ```sh
   npm install
   ```
2. Install XPath support:
   ```sh
   npm install -D cypress-xpath
   ```
3. Run Cypress:
   ```sh
   npx cypress open
   ```

## Writing Tests
- Place your test files in `cypress/e2e/`.
- Use page objects from `cypress/pages/` for clean, maintainable tests.
- Use utility functions and actions for DRY code.

## Example Usage
```javascript
import fundamentals from '../pages/fundamentals';

describe('Testing Fundamentals Page', () => {
  const fundamentalsPage = new fundamentals();
  beforeEach(() => {
    fundamentalsPage.visit();
  });

  it('should have the correct main heading', () => {
    fundamentalsPage.assertMainHeader();
  });
});
```

---

For more details, see the Cypress documentation: https://docs.cypress.io/
