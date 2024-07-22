import helpers from '../../support/HelpersFunctions/helpersFunctions.js';
import Homepage from '../../support/PageObjects/HomepagePOM.js';
import Elements from '../../support/PageObjects/ElementsPOM.js';

// VIEWPORT AND ENV URL
const sessionParams = {
  viewport: 'macbook-16',
  url: Cypress.env('URL'),
  // user: Cypress.env('USERNAME'),
  // pass: Cypress.env('PASSWORD') // AS SAID IN THE ENV FILE, IF THERE WAS A LOGIN, I WOULD HAVE USED THIS
};

// CONSTANTS
const { viewport, url } = sessionParams;
const homepage = new Homepage();
const elements = new Elements();

// TEST DESCRIPTION
describe('"WEB TABLES" SECTION TESTING', { testIsolation: false, retries: 0 }, () => {
  Cypress.on('uncaught:exception', () => { return false; });

before(() => {
// VIEWPORT AND URL
  helpers.session(viewport, url);
});

beforeEach(() => {
// SET THE VIEWPORT FOR EACH IT BLOCK
  cy.viewport(viewport);
});



// TEST CASES -------------------------------------------------------------
it('DQA-EL-WEBT-000\nASSERTIONS FOR THE HOMEPAGE', () => {
  homepage.getBannerImg().should('be.visible');
  homepage.getCategoryCards().should('be.visible');
  homepage.getElementsCardBody().should('be.visible');
  homepage.getFormsCardBody().should('be.visible');
  homepage.getAFWCardBody().should('be.visible');
  homepage.getWidgetsCardBody().should('be.visible');
  homepage.getInteractionsCardBody().should('be.visible');
  homepage.getBSAppCardBody().should('be.visible');
});

it('DQA-EL-WEBT-001\nACCESS "ELEMENTS" CATEGORY + ASSERTIONS FOR THE "ELEMENTS" PAGE', () => {
  homepage.getElementsCardBody().should('be.visible').click();
  homepage.getEmptyCardBody().should('not.exist');
  elements.getElementsBoxesBtn().contains('span.text', 'Text Box').should('be.visible');
  elements.getElementsBoxesBtn().contains('span.text', 'Check Box').should('be.visible');
  elements.getElementsBoxesBtn().contains('span.text', 'Radio Button').should('be.visible');
  elements.getElementsBoxesBtn().contains('span.text', 'Web Tables').should('be.visible');
  elements.getElementsBoxesBtn().contains('span.text', 'Buttons').should('be.visible');
  elements.getElementsBoxesBtn().contains('span.text', 'Links').should('be.visible');
  elements.getElementsBoxesBtn().contains('span.text', 'Broken Links - Images').should('be.visible');
  elements.getElementsBoxesBtn().contains('span.text', 'Upload and Download').should('be.visible');
  elements.getElementsBoxesBtn().contains('span.text', 'Dynamic Properties').should('be.visible');
});

it('DQA-EL-WEBT-002\nACCESS "WEB TABLES" PAGE + ASSERTIONS', () => {
  elements.getElementsBoxesBtn().contains('span.text', 'Web Tables').should('be.visible').click();
  elements.getH1Text().should('have.text', 'Web Tables').should('be.visible');
});

it('DQA-EL-WEBT-003\nCHECK IF THE COLUMN TITLES "FIRST NAME", "LAST NAME", "AGE", "EMAIL", "SALARY", "DEPARTMENT", "ACTION", ARE VISIBLE', () => {
  const titles = ['First Name', 'Last Name', 'Age', 'Email', 'Salary', 'Department', 'Action']; 
  helpers.gridColumnTitlesCheck(titles)
});

it('DQA-EL-WEBT-004\nCLEANUP THE TABLE', () => {
  elements.setWaitTimeSmall();
  cy.get('span#delete-record-1[data-toggle="tooltip"][title="Delete"]').should('be.visible').click();
  cy.get('span#delete-record-2[data-toggle="tooltip"][title="Delete"]').should('be.visible').click();
  cy.get('span#delete-record-3[data-toggle="tooltip"][title="Delete"]').should('be.visible').click();
  elements.getEmptyTableText().should('be.visible').contains('No rows found');
});

it('DQA-EL-WEBT-005\nCLICK ON "ADD" BUTTON + ASSERTIONS FOR THE ELEMENTS FROM THE POPUP WINDOW', () => {
  elements.getAddBtn().should('be.visible').click();
  elements.getH4Text().should('be.visible').contains('Registration Form');
  const titles = ['First Name', 'Last Name', 'Age', 'Email', 'Salary', 'Department']; 
  helpers.checkFormLabels(titles);
});

it('DQA-EL-WEBT-006\nCOMPLETE THE FORM WITH VALID DATA AND CLICK ON "SUBMIT" BUTTON', () => {
  const completeFields = [
  // FIELDS COMPLETION
  { fieldName: 'firstName', textToWrite: 'TEST.FIRSTNAME #1' },
  { fieldName: 'lastName', textToWrite: 'TEST.LASTNAME #1' },
  { fieldName: 'userEmail', textToWrite: 'TEST@TEST1.COM' },
  { fieldName: 'age', textToWrite: '20' },
  { fieldName: 'salary', textToWrite: '2500' },
  { fieldName: 'department', textToWrite: 'Quality Assurance' }];
  completeFields.forEach((completeField) => {helpers.findInputAndType(completeField.fieldName, completeField.textToWrite);});
  elements.getSubmitBtn().should('be.visible').click();
});

it('DQA-EL-WEBT-007\nASSERTIONS FOR THE TABLE AFTER THE SUBMISSION', () => {
  elements.getTableBody().should('be.visible');
  elements.getTableBody().find('.rt-td').contains('TEST.FIRSTNAME #1').should('be.visible');
  elements.getTableBody().find('.rt-td').contains('TEST.LASTNAME #1').should('be.visible');
  elements.getTableBody().find('.rt-td').contains('TEST@TEST1.COM').should('be.visible');
  elements.getTableBody().find('.rt-td').contains('20').should('be.visible');
  elements.getTableBody().find('.rt-td').contains('2500').should('be.visible');
  elements.getTableBody().find('.rt-td').contains('Quality Assurance').should('be.visible');
});

it('DQA-EL-WEBT-008\nCLICK ON THE "EDIT" BUTTON + ASSERTIONS FOR THE FORM', () => {
  elements.getH4Text().should('not.exist');
  elements.getEditBtn().should('be.visible').click( {force: true} );
  elements.getH4Text().should('be.visible').contains('Registration Form');
  const titles = ['First Name', 'Last Name', 'Age', 'Email', 'Salary', 'Department'];
  helpers.checkFormLabels(titles);
});

it('DQA-EL-WEBT-009\nCHANGE THE DATA IN THE FORM AND CLICK ON "SUBMIT" BUTTON', () => {
  const completeFields = [
  // FIELDS COMPLETION
  { fieldName: 'firstName', textToWrite: 'TEST.FIRSTNAME #2' },
  { fieldName: 'lastName', textToWrite: 'TEST.LASTNAME #2' },
  { fieldName: 'userEmail', textToWrite: 'TEST@TEST2.COM' },
  { fieldName: 'age', textToWrite: '25' },
  { fieldName: 'salary', textToWrite: '3000' },
  { fieldName: 'department', textToWrite: 'Quality Assurance' }];
  completeFields.forEach((completeField) => {helpers.findInputAndType(completeField.fieldName, completeField.textToWrite);});
  elements.getSubmitBtn().should('be.visible').click();
});

it('DQA-EL-WEBT-010\nASSERTIONS FOR THE TABLE AFTER THE SUBMISSION OF EDITED DATA', () => {
  elements.getTableBody().should('be.visible');
  elements.getTableBody().find('.rt-td').contains('TEST.FIRSTNAME #2').should('be.visible');
  elements.getTableBody().find('.rt-td').contains('TEST.LASTNAME #2').should('be.visible');
  elements.getTableBody().find('.rt-td').contains('TEST@TEST2.COM').should('be.visible');
  elements.getTableBody().find('.rt-td').contains('25').should('be.visible');
  elements.getTableBody().find('.rt-td').contains('3000').should('be.visible');
  elements.getTableBody().find('.rt-td').contains('Quality Assurance').should('be.visible');
});

it('DQA-EL-WEBT-011\nCLICK ON "ADD" BUTTON + CLICK ON "SUBMIT" BTN  TO CHECK IF THE FORM SAYS THE DATA IS INVALID', () => {
  elements.getAddBtn().should('be.visible').click();
  elements.getH4Text().should('be.visible').contains('Registration Form');
  const titles = ['First Name', 'Last Name', 'Age', 'Email', 'Salary', 'Department']; 
  helpers.checkFormLabels(titles);
  elements.getSubmitBtn().should('be.visible').click();
  elements.getFormIsInvalid().should('have.css', 'border-color', 'rgb(220, 53, 69)');
});

it('DQA-EL-WEBT-012\nFILL ALL THE FIELDS CORRECTLY + "EMAIL", "AGE", "SALARY" WITH INVALID DATA + CLICK ON "SUBMIT" BUTTON AND CHECK IF THE FORM SAYS THE DATA IS INVALID', () => {
  const completeFields = [
  // FIELDS COMPLETION
  { fieldName: 'firstName', textToWrite: 'TEST.FIRSTNAME #3' },
  { fieldName: 'lastName', textToWrite: 'TEST.LASTNAME #3' },
  { fieldName: 'userEmail', textToWrite: 'TESTINGEMAIL.COM' },
  { fieldName: 'age', textToWrite: 'BB' },
  { fieldName: 'salary', textToWrite: 'ABCD' },
  { fieldName: 'department', textToWrite: 'Software Engineer' }];
  completeFields.forEach((completeField) => {helpers.findInputAndType(completeField.fieldName, completeField.textToWrite);});
  elements.getSubmitBtn().should('be.visible').click();
});

it('DQA-EL-WEBT-013\nCLOSE THE "REGISTRATION FORM" AND DELETE THE FORM THAT WAS CREATED BEFORE', () => {
  elements.getCloseBtn().should('be.visible').click();
  elements.getH4Text().should('not.exist');
  elements.setWaitTimeSmall();
  cy.get('span#delete-record-1[data-toggle="tooltip"][title="Delete"]').should('be.visible').click();
  elements.getEmptyTableText().should('be.visible').contains('No rows found');
});

for (let i = 1; i <= 11; i++) {
it(`DQA-EL-WEBT-014\nCREATE NEW REGISTRATION [${i}] TO CHECK THE SEARCH, ROWS AND PAGE FEATURES`, () => {
  elements.getAddBtn().should('be.visible').click();
  elements.getH4Text().should('be.visible').contains('Registration Form');
  const titles = ['First Name', 'Last Name', 'Age', 'Email', 'Salary', 'Department']; 
  helpers.checkFormLabels(titles);
  const completeFields = [
  // FIELDS COMPLETION
  { fieldName: 'firstName', textToWrite: `TEST.FIRSTNAME #${i}` },
  { fieldName: 'lastName', textToWrite: `TEST.LASTNAME #${i}` },
  { fieldName: 'userEmail', textToWrite: `TEST@TEST${i}.COM` },
  { fieldName: 'age', textToWrite: `${20 + i}` },
  { fieldName: 'salary', textToWrite: `${2500 + i * 100}` },
  { fieldName: 'department', textToWrite: 'Quality Assurance' }];
  completeFields.forEach((completeField) => {helpers.findInputAndType(completeField.fieldName, completeField.textToWrite);});
  elements.getSubmitBtn().should('be.visible').click();
});}

it('DQA-EL-WEBT-015\nUSE THE SEARCH BOX TO SEARCH FOR THE ACCOUNT WITH EMAIL TEST@TEST10.COM', () => {
  elements.getSearchBox().type('TEST@TEST10.COM');
  elements.getSearchBox().should('have.value', 'TEST@TEST10.COM');
  elements.getSearchBox().clear();
});

it('DQA-EL-WEBT-016\nOPEN THE "ROWS" DROPDOWN + SELECT "5 ROWS" + GO TO 3RD PAGE AND BACK TO 1ST PAGE', () => {
  elements.getRowsDropdown().should('be.visible').select('5');
  elements.getH1Text().scrollIntoView().should('have.text', 'Web Tables').should('be.visible');
  elements.getNextBtn().should('be.visible').click();
  elements.getNextBtn().should('be.visible').click();
  elements.setWaitTimeSmall();
  elements.getPreviousBtn().should('be.visible').click();
  elements.getPreviousBtn().should('be.visible').click();
  elements.getH1Text().scrollIntoView().should('have.text', 'Web Tables').should('be.visible');
});
});