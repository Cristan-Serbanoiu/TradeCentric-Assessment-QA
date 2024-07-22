import helpers from '../../support/HelpersFunctions/helpersFunctions.js';
import Homepage from '../../support/PageObjects/HomepagePOM.js';
import Elements from '../../support/PageObjects/ElementsPOM.js';
import Widgets from '../../support/PageObjects/WidgetsPOM.js';

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
const widgets = new Widgets();

// TEST DESCRIPTION
describe('"PROGRESS BAR" SECTION TESTING', { testIsolation: false, retries: 0 }, () => {
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
it('DQA-WDS-PBAR-000\nASSERTIONS FOR THE HOMEPAGE', () => {
  homepage.getBannerImg().should('be.visible');
  homepage.getCategoryCards().should('be.visible');
  homepage.getElementsCardBody().should('be.visible');
  homepage.getFormsCardBody().should('be.visible');
  homepage.getAFWCardBody().should('be.visible');
  homepage.getWidgetsCardBody().should('be.visible');
  homepage.getInteractionsCardBody().should('be.visible');
  homepage.getBSAppCardBody().should('be.visible');
});

it('DQA-WDS-PBAR-001\nACCESS "WIDGETS" CATEGORY + ASSERTIONS FOR THE "WIDGETS" PAGE', () => {
  homepage.getWidgetsCardBody().should('be.visible').click();
  homepage.getEmptyCardBody().should('not.exist');
  elements.getElementsBoxesBtn().contains('span.text', 'Accordian').should('be.visible');
  elements.getElementsBoxesBtn().contains('span.text', 'Auto Complete').should('be.visible');
  elements.getElementsBoxesBtn().contains('span.text', 'Date Picker').should('be.visible');
  elements.getElementsBoxesBtn().contains('span.text', 'Slider').should('be.visible');
  elements.getElementsBoxesBtn().contains('span.text', 'Progress Bar').should('be.visible');
  elements.getElementsBoxesBtn().contains('span.text', 'Tabs').should('be.visible');
  elements.getElementsBoxesBtn().contains('span.text', 'Tool Tips').should('be.visible');
  elements.getElementsBoxesBtn().contains('span.text', 'Menu').should('be.visible');
  elements.getElementsBoxesBtn().contains('span.text', 'Select Menu').should('be.visible');
});

it('DQA-WDS-PBAR-002\nACCESS "PROGRESS BAR" PAGE + ASSERTIONS', () => {
  elements.getElementsBoxesBtn().contains('span.text', 'Progress Bar').should('be.visible').click();
  elements.getH1Text().should('have.text', 'Progress Bar').should('be.visible');
  elements.getH2Text().should('have.text', 'Progress Bar').should('be.visible');
});

it('DQA-WDS-PBAR-003\nCLICK ON "START" BUTTON + ASSERT IF THE PROGRESS BAR REACHES THE VALUES 25 > 50 > 75 > 100%', () => {
  widgets.getProgressBar().filter('[aria-valuenow="0"]').should('exist');
  widgets.getStartOrStopBtn().should('be.visible').click();
  elements.getH1Text().should('have.text', 'Progress Bar').scrollIntoView();
  widgets.getProgressBar().filter('[aria-valuenow="25"]').should('be.visible');
  widgets.getProgressBar().filter('[aria-valuenow="50"]').should('be.visible');
  widgets.getProgressBar().filter('[aria-valuenow="75"]').should('be.visible');
  widgets.getProgressBar().filter('[aria-valuenow="100"]').should('be.visible');
  elements.setWaitTimeSmall();
});

it('DQA-WDS-PBAR-004\nCLICK ON "RESET" BUTTON WHEN THE PROGRESS BAR REACHES 100% + ASSERT THE PROGRESS BAR IS AT 0%', () => {
  widgets.getResetBtn().should('be.visible').click();
  elements.getH2Text().should('have.text', 'Progress Bar').should('be.visible');
  elements.getH1Text().should('have.text', 'Progress Bar').scrollIntoView();
  widgets.getProgressBar().filter('[aria-valuenow="0"]').should('be.visible');
});
});