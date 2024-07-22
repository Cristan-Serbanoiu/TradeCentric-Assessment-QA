import Elements from "../PageObjects/ElementsPOM";
const elements = new Elements();


// SESSION FUNCTION ▼-------------------------------------▼
function session(viewport, url) { 
  cy.session([viewport, url], () => {
  cy.viewport(viewport);
  cy.visit(url);
});
}

// CONST TO CHECK THE GRID COLUMNS ▼-------------------------------------▼
const gridColumnTitlesCheck = (titles) => {
  titles.forEach((title) => {elements.getTableHeader().should('be.visible').and('contain.text', title);
});
}

// CONST TO CHECK THE FORM LABELS ▼-------------------------------------▼
const checkFormLabels = (titles) => {
  titles.forEach((title) => {elements.getFormLabel().should('be.visible').and('contain.text', title);
});
}

// CONST FOR INPUTS TO FIND AND TYPE ▼-------------------------------------▼
const findInputAndType = (fieldName, textToWrite) => {
  cy.get(`#${fieldName}-wrapper`).find('input').clear().type(textToWrite).should('be.visible');
};


export default {
  session,
  gridColumnTitlesCheck,
  checkFormLabels,
  findInputAndType
}
