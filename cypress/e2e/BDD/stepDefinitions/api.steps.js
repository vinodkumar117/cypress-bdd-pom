import { Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
import '../../hooks'

var requestBody = {};
var requestOptions = {};
let responseObject;
let responseBody;
var queryParam = {};


Given('User set queryParameter {string} to {string}', (key, value) => {
    Object.assign(queryParam,{key,value})
});

When('User set key {string} value to {string}', (key, value) => {
    Object.assign(requestBody,{key,value})

});

When('User make {string} call', (reqmethod) => {
    requestOptions.log = true;
    requestOptions.method = reqmethod;
    requestOptions.url = Cypress.env('apiEndpointURL');
    requestOptions.qs = queryParam;

    cy.request(requestOptions)
        .then((resp) => {
            responseObject = resp;
            cy.log('GET Response : '+JSON.stringify(responseObject.body))
            responseBody = JSON.stringify(responseObject.body);
            responseBody = JSON.parse(responseBody);
        });
});


When('User make a POST call', () => {
    cy.request({
        method:'POST',
        url:Cypress.env('apiEndpointURL'),
        body:requestBody
    }).then((resp) => {
        responseObject = resp;
        cy.log('POST Response : '+JSON.stringify(responseObject.body))
        responseBody = JSON.stringify(responseObject.body);
        responseBody = JSON.parse(responseBody);
        });
});

Then('Response code should be {string}', (responseCode) => {
    expect(responseCode).to.equal(responseObject.status.toString());
});

Then('Response body should contain a key {string} with a value {string}', (jsonkey, value) => {
    expect(responseBody[jsonkey]).to.equal(parseInt(value));
});

Then('Response body should have a key {string} with a value {string}', (jsonkey, value) => {
    expect(responseBody[jsonkey]).to.equal(value);
});

Then('Response body should have a key {string}', (jsonkey) => {
    expect(responseBody).to.have.property(jsonkey)
});


Then('Validate create user response schema', function() {
    expect(responseBody).to.be.jsonSchema(this.createUserSchema)
});

Then('Validate get user response schema', function() {
    expect(responseBody).to.be.jsonSchema(this.getUserSchema)
});


