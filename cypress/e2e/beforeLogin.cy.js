/// <reference types="cypress" />
import BeforeLogin from "./beforeLogin.po"


describe('Check Center Login Status', () => {
  it('This is a test case', function() {
      const beforeLoginPage = new BeforeLogin
      cy.log('This is spec cy itself')

      cy.visit('center.robotemi.com/')

      cy.get('.header')
        .findcat('button')
      
      beforeLoginPage.clickLoginBtn()
      beforeLoginPage.waitQrCodeResOK()
  })
})