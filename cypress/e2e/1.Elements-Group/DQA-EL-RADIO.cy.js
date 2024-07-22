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
describe('"RADIO BUTTON" SECTION TESTING', { testIsolation: false, retries: 0 }, () => {
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
it('DQA-EL-RADIO-000\nASSERTIONS FOR THE HOMEPAGE', () => {
  homepage.getBannerImg().should('be.visible');
  homepage.getCategoryCards().should('be.visible');
  homepage.getElementsCardBody().should('be.visible');
  homepage.getFormsCardBody().should('be.visible');
  homepage.getAFWCardBody().should('be.visible');
  homepage.getWidgetsCardBody().should('be.visible');
  homepage.getInteractionsCardBody().should('be.visible');
  homepage.getBSAppCardBody().should('be.visible');
});

it('DQA-EL-RADIO-001\nACCESS "ELEMENTS" CATEGORY + ASSERTIONS FOR THE "ELEMENTS" PAGE', () => {
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

it('DQA-EL-RADIO-002\nACCESS "RADIO BUTTON" PAGE + ASSERTIONS', () => {
  elements.getElementsBoxesBtn().contains('span.text', 'Radio Button').should('be.visible').click();
  elements.getH1Text().should('have.text', 'Radio Button').should('be.visible');
  elements.getH2Text().should('have.text', 'Do you like the site?').should('be.visible');
});

it('DQA-EL-RADIO-003\nASSERT IF THE RADIO BUTTONS ARE NOT CHECKED', () => {
  elements.getYesRadioBtn().should('not.be.checked');
  elements.getImpressiveRadioBtn().should('not.be.checked');
});
it('DQA-EL-RADIO-004\nCHECK IF BOTH RADIO BUTTONS HAVE THE SAME NAME ATTRIBUTE', () => {
  elements.getYesRadioBtn().should('have.attr', 'name', 'like')
  elements.getImpressiveRadioBtn().should('have.attr', 'name', 'like')
});

it('DQA-EL-RADIO-005\nCHECK IF THE FIRST RADIO BUTTON IS CHECKED + ASSERT IF THE SECOND RADIO BUTTON IS NOT CHECKED', () => {
  elements.getYesRadioBtn().check( {force: true} ).should('be.checked');
  elements.getYouHaveSelectedText().find('span.text-success').should('have.text', 'Yes');
  elements.getImpressiveRadioBtn().should('not.be.checked');
});

it('DQA-EL-RADIO-006\nCHECK IF THE SECOND RADIO BUTTON IS CHECKED + ASSERT IF THE FIRST RADIO BUTTON IS NOT CHECKED', () => {
  elements.getImpressiveRadioBtn().check( {force: true} ).should('be.checked');
  elements.getYouHaveSelectedText().find('span.text-success').should('have.text', 'Impressive');
  elements.getYesRadioBtn().should('not.be.checked');
});
});