/// <reference types="cypress" />
import TestSpec from "./spec.po"


describe('Check Center Login Status', () => {
  it('This is a test case', function() {
      const loginPage = new TestSpec
      cy.log('This is spec cy itself')

      cy.visit('https://center.robotemi.com/')

      cy.get('.header button')
        .findcat('cat')
      
      loginPage.clickLoginBtn()
      loginPage.waitQrCodeResOK()
  })
})