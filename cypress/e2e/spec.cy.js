/// <reference types="cypress" />

describe('Check Center Login Status', () => {
  it('This is a test case', function() {
      // wait for QR code to display
      cy.intercept('https://api.robotemi.com/api/v2/webplatform/iam/generate-code')
          .as('qrCode')

      cy.visit('https://center.robotemi.com/')
      cy.get('.header button')
          .click()

      cy.wait('@qrCode')
          .its('response.statusCode')
          .should('eq', 200)
  })
})