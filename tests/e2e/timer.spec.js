/// <reference types="cypress" />

describe('Waiting', () => {
  it.only('renders a countdown timer', () => {
    cy.clock()
    cy.visit('/')

    cy.contains('10 Seconds')
    cy.tick(2000)
    cy.contains('8 Seconds')
    cy.tick(8000)
    cy.contains('Now Expired')
  })

  it('should have focus', () => {
    cy.visit('/')
    cy.focused().should('have.attr', 'data-cy', 'theField')
  })
})
