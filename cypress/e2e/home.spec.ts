/// <reference types="cypress" />

describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should have the correct title', () => {
    cy.title().should('include', 'The Matt Lundberg')
  })

  it('should render the main heading', () => {
    cy.get('h1').should('be.visible')
  })

  it('should have working navigation links', () => {
    cy.get('nav').should('exist')
    cy.get('nav a').should('have.length.at.least', 1)
  })

  it('should have a footer', () => {
    cy.get('footer').should('be.visible')
  })
}) 