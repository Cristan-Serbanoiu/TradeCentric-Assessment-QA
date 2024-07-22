# Cypress Framework

Welcome to the Cypress Framework! This repository contains a testing framework built with Cypress for automated end-to-end testing for Demo Assessment of Trade Centric.

## Getting Started

Follow these steps to get the project up and running on your local machine.

### Prerequisites

Make sure you have the following software installed on your system:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [git](https://git-scm.com/downloads) (Windows edition)
- [npm](https://www.npmjs.com/) (Node Package Manager)

### Installation

1. Clone this repository to your local machine:
``` git clone [https://github.com/Cristan-Serbanoiu/TradeCentric-Assessment.git](https://github.com/Cristan-Serbanoiu/TradeCentric-Assessment-QA.git) ```


2. Navigate to the project directory and install dependencies (use Terminal)
    1. npm install cypress --save-dev [install cypress]
    2. npm install dotenv --save [dotenv install (optional, in case the dependency is not in the package.json)]

3. Running Cypress Tests from the UI Dashboard (use Terminal)
    npx cypress open

4. Running Cypress Tests with npm in Headless way (no cypress ui being opened), the scripts are located in package.json:

  `"scripts": {
    "elements:radio": "cypress run --headless --browser chrome --spec 'cypress/e2e/1.Elements-Group/DQA-EL-RADIO.cy.js'",
    "elements:webtables": "cypress run --headless --browser chrome --spec 'cypress/e2e/1.Elements-Group/DQA-EL-WEBT.cy.js'",
    "widgets:accordian": "cypress run --headless --browser chrome --spec 'cypress/e2e/2.Widgets-Group/DQA-WDS-ACC.cy.js'",
    "widgets:datepicker": "cypress run --headless --browser chrome --spec 'cypress/e2e/2.Widgets-Group/DQA-WDS-DATEP.cy.js'",
    "widgets:progressbar": "cypress run --headless --browser chrome --spec 'cypress/e2e/2.Widgets-Group/DQA-WDS-PBAR.cy.js'",
    "widgets:slider": "cypress run --headless --browser chrome --spec 'cypress/e2e/2.Widgets-Group/DQA-WDS-SLI.cy.js'",
    "widgets:tabs": "cypress run --headless --browser chrome --spec 'cypress/e2e/2.Widgets-Group/DQA-WDS-TABS.cy.js'"`

Ex: run the elements/radio tests with: npm run elements:radio

Ex: run the widgets/accordian tests with: npm run widgets:accordian


5. Cypress Documentation
    https://docs.cypress.io/guides/overview/why-cypress
    https://docs.cypress.io/guides/references/best-practices
