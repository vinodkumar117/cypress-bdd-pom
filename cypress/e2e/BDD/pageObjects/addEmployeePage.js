class addEmployeePage{

    linkPIM(){
        return cy.xpath('//span[text()="PIM"]')
    }

    buttonAdd(){
        return cy.contains('Add')
    }

    empFirstName(){
        return cy.xpath('//input[@name="firstName"]')
    }
    empLastName(){
        return cy.xpath('//input[@name="lastName"]')
    }

    buttonSave(){
        return cy.contains('Save')
    }

    searchEmployeeName(){
        return cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input');
    }

    searchButton(){
        return cy.xpath("//button[contains(@type,'submit')]")
    }

    verifySearch(){
        return cy.get('.oxd-table-body > :nth-child(1) > .oxd-table-row > :nth-child(3) > div')
    }

    verifyAddEmp(){
        return cy.get('.orangehrm-edit-employee-name > .oxd-text')
    }

    addEmployee(firstName, lastName){
        this.empFirstName().type(firstName)
        this.empLastName().type(lastName)
        this.buttonSave().click();
    }

    clickPIM(){
        this.linkPIM().click()
    }
    clickSave(){
        this.buttonSave().click()
    }

    clickAdd(){
        this.buttonAdd().click()
    }

    inputSearchEmployee(empName){
        this.searchEmployeeName().clear().type(empName);
    }

    clickSearchButton(){
        this.searchButton().click({ force: true });
    }
}

export default addEmployeePage