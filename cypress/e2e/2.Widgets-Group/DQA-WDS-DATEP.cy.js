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
describe('"SELECT MENU" SECTION TESTING', { testIsolation: false, retries: 0 }, () => {
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
it('DQA-WDS-DATEP-000\nASSERTIONS FOR THE HOMEPAGE', () => {
  homepage.getBannerImg().should('be.visible');
  homepage.getCategoryCards().should('be.visible');
  homepage.getElementsCardBody().should('be.visible');
  homepage.getFormsCardBody().should('be.visible');
  homepage.getAFWCardBody().should('be.visible');
  homepage.getWidgetsCardBody().should('be.visible');
  homepage.getInteractionsCardBody().should('be.visible');
  homepage.getBSAppCardBody().should('be.visible');
});

it('DQA-WDS-DATEP-001\nACCESS "WIDGETS" CATEGORY + ASSERTIONS FOR THE "WIDGETS" PAGE', () => {
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

it('DQA-WDS-DATEP-002\nACCESS "DATE PICKER" PAGE + ASSERTIONS', () => {
  elements.getElementsBoxesBtn().contains('span.text', 'Date Picker').should('be.visible').click();
  elements.getH1Text().should('have.text', 'Date Picker').should('be.visible');
});

it('DQA-WDS-DATEP-003\nASSERT THE "SELECT DATE" TITLE + CHANGE THE DATE TO "09/30/2024" + ASSERT IF THE DATE WAS CHANGED TO "09/30/2024"', () => {
  widgets.getDateAndTimeTitles().contains('Select Date').should('be.visible');
  widgets.getDatePickerMonthYearInput().click();
  widgets.getDatePicker().select('September');
  widgets.getDatePickerMonthYearInput().click();
  widgets.getDayPicker().contains('30').should('be.visible').click();
  widgets.getDatePickerMonthYearInput().click();
  widgets.getYearPicker().select('2024').type('{esc}');
  widgets.getDatePickerMonthYearInput().scrollIntoView().should('have.value', '09/30/2024');
});

it('DQA-WDS-DATEP-004\nASSERT THE "DATE AND TIME" TITLE + CHANGE THE DATE AND TIME TO "September 30, 2025 12:30 PM"', () => {
  widgets.getDateAndTimePickerInput().click();
  widgets.openDATMonthDropdown().click();
  widgets.getDATMonthDropdown().contains('div.react-datepicker__month-option', 'September').click();
  widgets.openDATYearDropdown().click();
  widgets.getDATYearDropdown().contains('div.react-datepicker__year-option', '2025').click();
  widgets.getDayPicker().contains('30').should('be.visible').click();
  widgets.getDATTimeDropdown().contains('12:30').click();
  widgets.getDateAndTimePickerInput().scrollIntoView().should('have.value', 'September 30, 2025 12:30 PM');
  elements.getH1Text().should('have.text', 'Date Picker').scrollIntoView();
});

});