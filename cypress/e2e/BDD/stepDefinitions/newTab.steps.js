import { Given, When, Then , And} from "@badeball/cypress-cucumber-preprocessor";

Given('user opens the site', () => {
    cy.visit(Cypress.env('newTabSite'))
});

When('user opens a new tab', () => {
    cy.get('.example > a').invoke('removeAttr', 'target').click()
    cy.url()
        .should('include', '/windows/new')
    cy.get('h3')
        .should('have.text', 'New Window')
});