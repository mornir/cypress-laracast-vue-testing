/// <reference types="cypress" />

import { mount } from 'cypress-vue-unit-test'
import Countdown from '../../src/components/Countdown.vue'
//import Countdown from '../../src/components/CountdownAlternate.vue'

describe('CountDown', () => {
  beforeEach(() => {
    cy.clock().then(() => {
      var date = new Date()
      date.setSeconds(date.getSeconds() + 10)
      mount(Countdown, {
        propsData: { until: date },
      })
    })
  })

  it('renders a countdown timer', () => {
    cy.contains('0 Days, 0 Hours, 0 Minutes, 10 Seconds')
  })

  it('reduces the countdown every second', () => {
    cy.tick(1000)
    cy.contains('9 Seconds')
  })

  it('shows an expired message when the countdown has completed', () => {
    cy.tick(10000)
    cy.contains('Now Expired')
  })

  it('shows a custom expired message when the countdown has completed', () => {
    Cypress.vue.expiredText = 'Contest is over'
    cy.tick(10000)
    cy.contains('Contest is over')
  })

  it('broadcasts when the countdown is finished', () => {
    const spy = cy.spy()
    Cypress.vue.$on('finished', spy)
    cy.tick(10000).then(() => {
      expect(spy).to.be.calledOnce
    })
  })

  it('clears the interval once completed', () => {
    cy.tick(10000).then(() => {
      expect(Cypress.vue.now.getSeconds()).to.equal(10)
    })
    cy.tick(5000).then(() => {
      expect(Cypress.vue.now.getSeconds()).to.equal(10)
    })
  })
})
