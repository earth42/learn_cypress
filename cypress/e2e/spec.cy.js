/// <reference types="cypress" />
import TestSpec from "./spec.po"


describe('Check Center Login Status', () => {
  it('This is a test case', function() {
      const loginPage = new TestSpec

      cy.visit('https://center.robotemi.com/')

      loginPage.clickLoginBtn()
      loginPage.waitQrCodeResOK
  })
})