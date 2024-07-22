class Elements {
// ELEMENTS PAGE
  getElementsBoxesBtn() {
    return cy.get('.btn.btn-light');
  }

  setWaitTimeSmall() {
    return cy.wait(500);
  }


// "RADIO BUTTON" SECTION
  getH1Text() {
    return cy.get('h1.text-center');
  }

  getH2Text() {
    return cy.get('div.mb-3');
  }

  getYesRadioBtn() {
    return cy.get('input[type="radio"]#yesRadio');
  }

  getImpressiveRadioBtn() {
    return cy.get('input[type="radio"]#impressiveRadio');
  }

  getYouHaveSelectedText() {
    return cy.contains('p.mt-3', 'You have selected');
  }


// "WEB TABLES" SECTION
  getTableHeader() {
    return cy.get('[class="rt-thead -header"]')
  }

  getDeleteBtn() {
    return cy.get('[title="Delete"]');
  }

  getEmptyTableText() {
    return cy.get('div.rt-noData');
  }

  getAddBtn() {
    return cy.get('#addNewRecordButton');
  }

  getH4Text() {
    return cy.get('[class="modal-title h4"]');
  }

  getFormLabel() {
    return cy.get('[class="form-label"]');
  }

  getSubmitBtn() {
    return cy.get('[type="submit"]');
  }

  getTableBody() {
    return cy.get('[class="rt-tbody"]');
  }

  getEditBtn(){
    return cy.get('[title="Edit"]');
  }

  getFormIsInvalid() {
    return cy.get('.form-control.is-invalid, .was-validated .form-control:invalid');
  }

  getCloseBtn() {
    return cy.get('[class="close"]');
  }

  getSearchBox() {
    return cy.get('#searchBox');
  }

  getRowsDropdown() {
    return cy.get('.select-wrap.-pageSizeOptions select[aria-label="rows per page"]');
  }

  getNextBtn() {
    return cy.get('button.-btn[type="button"]').contains('Next');
  }

  getPreviousBtn() {
    return cy.get('button.-btn[type="button"]').contains('Previous');
  }
}
export default Elements;
