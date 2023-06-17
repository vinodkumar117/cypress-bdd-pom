
before(function () {
  cy.log("Starting the execution")
  cy.fixture('createUserSchema').as('createUserSchema')
  cy.fixture('getUserSchema').as('getUserSchema')
  
 })

 after(function () {
  cy.log("Test execution completed")

 })
  