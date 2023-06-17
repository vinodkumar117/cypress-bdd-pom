import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from '../pageObjects/loginPage'
const loginPage = new LoginPage();


Given('open the application in browser', () => {
	cy.visit(Cypress.env('baseUrl'));
});

When('user enters the username and password', () => {
    
    loginPage.login(Cypress.env('username'),Cypress.env('password'));

});

When('user enters username {string} and password {string}', (username,password) => {
    loginPage.login(username,password);
});

When('user clicks on Login button', () => {
    
    loginPage.clickLoginButton();

});

Then('user should be logged in successfully', () => {
	loginPage.loggedUserDrop().should('not.be.empty')
});


Then('validate error message {string} is displayed', (errorMsg) => {
	loginPage.loginErrorMsg().should('have.text',errorMsg)
});