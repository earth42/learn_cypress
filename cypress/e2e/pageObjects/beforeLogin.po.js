class BeforeLogin {
    constructor() {
        cy.intercept('https://api.robotemi.com/api/v2/webplatform/iam/generate-code')
            .as('qrCode')
        cy.log('This is TestSpec po page')
    }

    clickLoginBtn() {
        cy.get('.header button')
            .click()
    }

    waitQrCodeResOK() {
        cy.wait('@qrCode')
            .its('response.statusCode')
            .should('eq', 200)
    }
}

export default BeforeLogin;