class Widgets {
// SLIDER PAGE
getSlider() {
    return cy.get('input[type="range"]');
}


// PROGRESS BAR PAGE
getStartOrStopBtn() {
    return cy.get('#startStopButton');
}

getProgressBar() {
    return cy.get('div[role="progressbar"]');
}

getResetBtn() {
    return cy.get('[id="resetButton"]');
}


// TABS PAGE
getWhatTab() {
    return cy.get('[data-rb-event-key="what"]');
}

getOriginTab() {
    return cy.get('[data-rb-event-key="origin"]');
}

getUseTab() {
    return cy.get('[data-rb-event-key="use"]');
}

getAriaLabelWhatDesc() {
    return cy.get('[aria-labelledby="demo-tab-what"]');
}

getAriaLabelOriginDesc() {
    return cy.get('[aria-labelledby="demo-tab-origin"]');
}

getAriaLabelUseDesc() {
    return cy.get('[aria-labelledby="demo-tab-use"]');
}


// DATE PICKER PAGE
getDateAndTimeTitles() {
    return cy.get('div.col-md-3.col-sm-12');
}

getDatePickerMonthYearInput() {
    return cy.get('#datePickerMonthYearInput');
}

getDateAndTimePickerInput() {
    return cy.get('#dateAndTimePickerInput');
}

getDayPicker() {
    return cy.get('div.react-datepicker__day');
}

getDatePicker() {
    return cy.get('[class="react-datepicker__month-select"]');
}

getYearPicker() {
    return cy.get('[class="react-datepicker__year-select"]');
}

openDATMonthDropdown() {
    return cy.get('[class="react-datepicker__month-read-view"]');
}

getDATMonthDropdown() {
    return cy.get('[class="react-datepicker__month-dropdown"]');
}

openDATYearDropdown() {
    return cy.get('[class="react-datepicker__year-read-view"]');
}

getDATYearDropdown() {
    return cy.get('[class="react-datepicker__year-dropdown"]');
}

getDATTimeDropdown() {
    return cy.get('li.react-datepicker__time-list-item');
}
}
export default Widgets;