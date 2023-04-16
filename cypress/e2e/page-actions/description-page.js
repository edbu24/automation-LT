export class DescriptionPage {
    get finishBtn() {
        return cy.get('#finish')
    }

    get descriptionProductName() {
        return cy.get('div.inventory_item_name')
    }

    validateOverviewProduct() {
        cy.get('@pr').then((prd) => {
            this.descriptionProductName.should('have.text', prd.text())
        })
    }
}