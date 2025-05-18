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


Cypress.Commands.add('fillMandatoryFieldsAndSubmit', (data = {
        firstName: 'Thiago',
        lastName: 'Barreto',
        email: 'email@email.com',
        text: 'texto longo'
    }) =>{
    cy.get('input[id="firstName"]').as('Nome').type(data.firstName)
    cy.get('input[id="lastName"]').as('Sobrenome').type(data.lastName)
    cy.get('input[id="email"]').as('email').type(data.email)
    cy.get('textarea[id="open-text-area"]').as('areaLivre').type(data.text, {delay: 100})
    cy.get('button[type="submit"]').click()
})
