import '@testing-library/cypress/add-commands'

// Cypress Testing Library provides better commands for finding elements
declare global {
  namespace Cypress {
    interface Chainable {
      // Add custom commands here if needed
    }
  }
}

// Prevent TypeScript errors when accessing cy.* commands
export {} 