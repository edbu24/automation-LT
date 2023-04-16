import { ITEM_NAME } from "../../const/values"

export class ProductPage {

    get productName() {
        return cy.get('div.inventory_item_name')
    }
    get cartButton() {
        return cy.get('a.shopping_cart_link')
    }

    get addToCartBtn() {
        return cy.get('.btn.btn_primary')
    }

    searchProduct() {
        this.productName.its('length').then((length) => {
            for(let i = 0; i<length; i++){
                this.productName.eq(i).then((product) => {
                    if(product.text().includes(ITEM_NAME)){
                        this.addToCartBtn.eq(i).click()
                        this.productName.eq(i).as('prod')
                  }
                })
            }
        })
        cy.get('@prod').then((prd) => {
            prd.text()
        }).as('pr')
    }

}