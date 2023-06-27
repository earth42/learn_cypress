/// <reference types="cypress" />
import TestSpec from "./spec.po"


describe('Check Center Login Status', () => {
  it('This is a test case', function() {
      const loginPage = new TestSpec
      cy.log('This is spec cy itself')

      cy.visit('https://center.robotemi.com/')

      cy.get('.header').findcat('cat')
      
      const catJump = () => {
        cy.log('Cat is alive, and jumps for no reason')
        console.log('Cat is alive, and jumps for no reason')
        cy.exec('echo "Cat is alive, and jumps for no reason"')
      }
      cy.get('.header').findcat('cat', catJump)

      loginPage.clickLoginBtn()
      loginPage.waitQrCodeResOK()
  })
})