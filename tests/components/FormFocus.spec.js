import { mount } from 'cypress-vue-unit-test'
import FormFocus from '../../src/components/FormFocus.vue'

describe('FormFocus', () => {
  it('should be focused', () => {
    mount(FormFocus)
    cy.focused().should('have.attr', 'type', 'email')
  })
})
