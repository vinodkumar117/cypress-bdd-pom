class loginPage{

    username(username){
        return cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
    }

    password(password){
        return cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input')
    }

    buttonLogin(){
        return cy.get('.oxd-button')
    }

    loggedUserDrop(){
        return cy.get('.oxd-userdropdown-name')
    }

    loginErrorMsg(){
        return cy.get('.oxd-alert-content > .oxd-text')
    }

    login(username, password){
        this.username().type(username)
        this.password().type(password)
    }

    clickLoginButton(){
        this.buttonLogin().click();
    }
}

export default loginPage