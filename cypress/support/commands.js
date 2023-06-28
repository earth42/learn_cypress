// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// A cypress custom command to get uncertain element
Cypress.Commands.add('findcat', (cat, inBox) => {
	const catJumps = () => {
		cy.log('Cat is alive, and jumps for no reason')
		console.log('Cat is alive, and jumps for no reason')
		cy.exec("echo 'Cat is dead'")
	}
	
	cy.wrap(inBox).find(cat)
		.each(() => {
			//do something with it
			catJumps()
		})
})