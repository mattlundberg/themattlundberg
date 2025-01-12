/// <reference types="cypress" />

describe('Navigation and Interaction', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should have a responsive navigation menu', () => {
    // Desktop view
    cy.viewport(1024, 768)
    cy.get('nav').should('be.visible')
    
    // Mobile view
    cy.viewport('iphone-x')
    cy.get('nav').should('exist')
  })

  it('should have working social media links', () => {
    cy.get('a[href*="github"]').should('have.attr', 'target', '_blank')
    cy.get('a[href*="linkedin"]').should('have.attr', 'target', '_blank')
  })

  it('should have accessible interactive elements', () => {
    // Check for ARIA labels
    cy.get('button').should('have.attr', 'aria-label')
    cy.get('a').should('have.attr', 'aria-label')
    
    // Check for keyboard navigation
    cy.get('a').first().focus()
      .type('{tab}')
      .next('a').should('have.focus')
  })

  it('should load images with alt text', () => {
    cy.get('img').each(($img) => {
      cy.wrap($img).should('have.attr', 'alt')
    })
  })
}) 