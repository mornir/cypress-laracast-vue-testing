/// <reference types="cypress" />

describe('Waiting', () => {
  it('renders a countdown timer', () => {
    cy.clock()
    cy.visit('/')
    cy.contains('10 Seconds')
    cy.tick(2000)
    cy.contains('8 Seconds')
    cy.tick(8000)
    cy.contains('Now Expired')
  })
})
