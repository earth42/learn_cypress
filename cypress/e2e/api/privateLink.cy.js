/// <reference types="cypress" />

describe('Check all private related APIs', () => {
    it('API: telepresence/link/guest/host-info', () => {
        cy.request(
            'POST',
            Cypress.env().apiUrl + 'telepresence/link/guest/host-info',
            {
                clientId: "User's clientId is required"
            }
        ).then((res) => {
            expect(res.status).to.equal(200)
            cy.log(res.body)
        })
    })
})