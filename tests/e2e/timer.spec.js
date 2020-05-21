/// <reference types="cypress" />

describe('Waiting', () => {
  it('renders a countdown timer', () => {
    cy.clock()
    cy.visit('/')
    cy.contains('10 Seconds')
    cy.tick(2000)
    cy.contains('8 Seconds')
    cy.tick(9000)
    cy.contains('01:00:10')
  })
})
