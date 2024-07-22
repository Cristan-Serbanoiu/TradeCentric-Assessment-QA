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
describe('"TABS" SECTION TESTING', { testIsolation: false, retries: 0 }, () => {
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
it('DQA-WDS-TABS-000\nASSERTIONS FOR THE HOMEPAGE', () => {
  homepage.getBannerImg().should('be.visible');
  homepage.getCategoryCards().should('be.visible');
  homepage.getElementsCardBody().should('be.visible');
  homepage.getFormsCardBody().should('be.visible');
  homepage.getAFWCardBody().should('be.visible');
  homepage.getWidgetsCardBody().should('be.visible');
  homepage.getInteractionsCardBody().should('be.visible');
  homepage.getBSAppCardBody().should('be.visible');
});

it('DQA-WDS-TABS-001\nACCESS "WIDGETS" CATEGORY + ASSERTIONS FOR THE "WIDGETS" PAGE', () => {
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

it('DQA-WDS-TABS-002\nACCESS "TABS" PAGE + ASSERTIONS', () => {
  elements.getElementsBoxesBtn().contains('span.text', 'Tabs').should('be.visible').click();
  elements.getH1Text().should('have.text', 'Tabs').should('be.visible');
  elements.getH2Text().should('have.text', 'Details about Lorem Ipsum').should('be.visible');
});

it('DQA-WDS-TABS-002\nACCESS THE FIRST TAB "WHAT" AND ASSERT THE TITLE AND THE DESCRIPTION', () => {
  widgets.getWhatTab().contains('What').should('be.visible').click();
  widgets.getAriaLabelWhatDesc().find('p').should('be.visible')
.should('have.text', `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`);
});

it('DQA-WDS-TABS-003\nACCESS THE SECOND TAB "ORIGIN" AND ASSERT THE TITLE AND THE DESCRIPTION', () => {
  widgets.getOriginTab().contains('Origin').should('be.visible').click();
  widgets.getAriaLabelOriginDesc().find('p').should('be.visible')
.should('have.text', `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`);
});

it('DQA-WDS-TABS-004\nACCESS THE THIRD TAB "USE" AND ASSERT THE TITLE AND THE DESCRIPTION', () => {
  widgets.getUseTab().contains('Use').should('be.visible').click();
  widgets.getAriaLabelUseDesc().find('p').should('be.visible')
.should('have.text', `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`);
});

it('DQA-WDS-TABS-005\nREDO ASSERTIOS FOR H1 AND H2', () => {
  elements.getH1Text().should('have.text', 'Tabs').scrollIntoView().should('be.visible');
  elements.getH2Text().should('have.text', 'Details about Lorem Ipsum').should('be.visible');
});
});