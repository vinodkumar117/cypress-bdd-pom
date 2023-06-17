import { Given, When, Then , And} from "@badeball/cypress-cucumber-preprocessor";
import HomePage from '../pageObjects/homePage'
const homePage = new HomePage();

before(function () {
    cy.fixture('homePage').as('homePageData')
    
})

Given('Validate home page left menu option text', function() {

    var listItems= this.homePageData.menuLinks;
    homePage.leftMenuLinksText().each(function(item, index){
        cy.wrap(item).should('contain.text', listItems[index])
    })
});