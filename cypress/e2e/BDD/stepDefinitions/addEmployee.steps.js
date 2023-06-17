import { Given, When, Then , And} from "@badeball/cypress-cucumber-preprocessor";
import AddEmployeePage from "../pageObjects/addEmployeePage";

const addEmployeePage = new AddEmployeePage();

beforeEach(function () {
 cy.fixture("addEmployeeTestData").as('employeeData')
})

Given('user clicks on PIM', () => {
    addEmployeePage.clickPIM();
});

When('user clicks on Add button', () => {
    addEmployeePage.clickAdd();
})

When('user adds a new employee', function() {

    addEmployeePage.addEmployee(this.employeeData.firstName, this.employeeData.lastName);
});

Then('employee should be added successfully', function() {
    addEmployeePage.verifyAddEmp().should('have.text', this.employeeData.firstName+' '+this.employeeData.lastName)

});

When('user enters employee name in search', function(){
    addEmployeePage.inputSearchEmployee(this.employeeData.firstName)
})

When('user clicks on search button', () =>{
    addEmployeePage.clickSearchButton()
})

Then('user should be able to search employee with name', function(){
    addEmployeePage.verifySearch().should('contain', this.employeeData.firstName)
})