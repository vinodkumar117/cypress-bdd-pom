nagp-cypress

Description - It's a BDD framework. It covers both UI and API cases.


prerequisites -
	1. Node.js
	2. VS code studio

How to Install dependencies-
	1. run following command in project folder : npm i
	2. install following extensions in VS code -
		a. Cucumber (Gherkin) Full Support
		b. Cypress Helper (latest)
		c. Cypress Snippets
		4. PlayWright/Cypress Steps Definition Generator

	
Test Folders -
	1. Feature Files. These are the BDD tests written in Gherkin Format. Have the extension .feature -->./cypress/e2e/BDD/features/
	2. Step Files. Implements the Feature File statements using cypress commands -->./cypress/e2e/BDD/stepDefinitions/
	3. Page Objects. These files contains locators and functions for each page -->./cypress/e2e/BDD/pageObjects/
	4. Fixtures. JSON files under this contains test data -->./cypress/fixtures/
	
	
How to run -
	1. To run using tags : npx cypress run -e TAGS='@smoke'
	2. To run in cypress open dashboard mode, run following command and select the feature files : npx cypress open
	3. To run from command line: npm run test
	4. To run in headless mode: npx cypress run
	
	
Test Report -
	1. html test report is available under -->./cypress/reports/html
	2. screenshots are available under -->	./cypress/screenshots/
	
	
Cloud excution screenshot is attached in project path
	
