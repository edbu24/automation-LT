export class CompleteOrderPage {
    get finishOrderMessage() {
        return cy.get('h2.complete-header')
    }

    get descriptionOrderMessage() {
        return cy.get('div.complete-text')
    }
}