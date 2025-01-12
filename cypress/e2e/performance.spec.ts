/// <reference types="cypress" />

describe('Performance and SEO', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should have proper meta tags', () => {
    cy.get('head meta[name="description"]').should('exist')
    cy.get('head meta[name="viewport"]').should('exist')
    cy.get('head meta[property="og:title"]').should('exist')
    cy.get('head meta[property="og:description"]').should('exist')
  })

  it('should have proper heading hierarchy', () => {
    cy.get('h1').should('have.length', 1)
    cy.get('h2, h3, h4, h5, h6').each(($heading) => {
      const currentLevel = parseInt($heading.prop('tagName').slice(1))
      const prevLevel = parseInt($heading.prev('h1, h2, h3, h4, h5, h6').prop('tagName')?.slice(1) || '1')
      expect(currentLevel - prevLevel).to.be.lessThan(2)
    })
  })

  it('should load critical resources', () => {
    cy.get('link[rel="stylesheet"]').should('exist')
    cy.get('script').should('exist')
  })

  it('should have proper language attribute', () => {
    cy.get('html').should('have.attr', 'lang')
  })
}) 