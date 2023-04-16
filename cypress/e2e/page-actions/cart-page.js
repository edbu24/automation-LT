export class CartPage {
    get checkoutBtn() {
        return cy.get('#checkout')
    }

    get productName() {
        return cy.get('div.inventory_item_name')
    }

    validateSelectedProduct() {
        cy.get('@pr').then((prd) => {
            this.productName.should('have.text', prd.text())
        })
    }
}