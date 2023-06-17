class homePage{

    leftMenuLinksText(){
        return cy.get('.oxd-main-menu').find('li').find('a').find('span')
    }
}

export default homePage