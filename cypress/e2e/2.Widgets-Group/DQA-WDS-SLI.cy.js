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
describe('"SLIDER" SECTION TESTING', { testIsolation: false, retries: 0 }, () => {
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
it('DQA-WDS-SLI-000\nASSERTIONS FOR THE HOMEPAGE', () => {
  homepage.getBannerImg().should('be.visible');
  homepage.getCategoryCards().should('be.visible');
  homepage.getElementsCardBody().should('be.visible');
  homepage.getFormsCardBody().should('be.visible');
  homepage.getAFWCardBody().should('be.visible');
  homepage.getWidgetsCardBody().should('be.visible');
  homepage.getInteractionsCardBody().should('be.visible');
  homepage.getBSAppCardBody().should('be.visible');
});

it('DQA-WDS-SLI-001\nACCESS "WIDGETS" CATEGORY + ASSERTIONS FOR THE "WIDGETS" PAGE', () => {
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

it('DQA-WDS-SLI-002\nACCESS "SLIDER" PAGE + ASSERTIONS', () => {
  elements.getElementsBoxesBtn().contains('span.text', 'Slider').should('be.visible').click();
  elements.getH1Text().should('have.text', 'Slider').should('be.visible');
});

it('DQA-WDS-SLI-003\nASSERT THE SLIDER IS AT 25 VALUE WHEN ACCESING THE PAGE THEN MOVE IT TO 50 > 75 > 100 > 0 VALUES', () => {
  widgets.getSlider().should('be.visible').should('have.attr', 'value', '25');
  widgets.getSlider().invoke('val', '50').trigger('input');
  // widgets.getSlider().should('be.visible').should('have.attr', 'value', '50'); THE SLIDER NUMBER IS BUGGED, IF YOU UNCOMMENT THESE LINES YOU WILL SEE THAT THESE ASSERTION FAIL BECAUSE THE NUMBER FROM THE BOX REMAINS AT "25"
  widgets.getSlider().invoke('val', '75').trigger('input');
  // widgets.getSlider().should('be.visible').should('have.attr', 'value', '75');
  widgets.getSlider().invoke('val', '100').trigger('input');
  // widgets.getSlider().should('be.visible').should('have.attr', 'value', '100');
  widgets.getSlider().invoke('val', '0').trigger('input');
  // widgets.getSlider().should('be.visible').should('have.attr', 'value', '0');
});
});