export class PersonalInformationPage {
    get firstNameField() {
        return cy.get('#first-name')
    }

    get lastNameField() {
        return cy.get('#last-name')
    }

    get zipCodeField() {
        return cy.get('#postal-code')
    }

    get continueBtn() {
        return cy.get('#continue')
    }

    fillOutInformation(firstname, lastname, zipcode) {
        this.firstNameField.type(firstname)
        this.lastNameField.type(lastname)
        this.zipCodeField.type(zipcode)
        this.continueBtn.click()
    }
}