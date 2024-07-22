class Homepage {
  getBannerImg() {
    return cy.get('img.banner-image[alt="Selenium Online Training"]');
  }

  getCategoryCards() {
    return cy.get('div.category-cards');
  }

  getEmptyCardBody() {
    return cy.get('div.card-body');
  }

  getElementsCardBody() {
    return cy.get('div.card-body').contains('h5', 'Elements');
  }

  getFormsCardBody() {
    return cy.get('div.card-body').contains('h5', 'Forms');
  }

  getAFWCardBody() {
    return cy.get('div.card-body').contains('h5', 'Alerts, Frame & Windows');
  }

  getWidgetsCardBody() {
    return cy.get('div.card-body').contains('h5', 'Widgets');
  }

  getInteractionsCardBody() {
    return cy.get('div.card-body').contains('h5', 'Interactions');
  }

  getBSAppCardBody() {
    return cy.get('div.card-body').contains('h5', 'Book Store Application');
  }
}
export default Homepage;
