/// <reference types="cypress" />
import { FNAME, ITEM_NAME, LNAME, PASSWORD, USER_NAME, ZIPCODE } from "../const/values"

import { LoginPage } from "./page-actions/loogin-page"
import { ProductPage } from "./page-actions/prduct-page"
import { CartPage } from "./page-actions/cart-page"
import { PersonalInformationPage } from "./page-actions/personal-information-page"
import { DescriptionPage } from "./page-actions/description-page"
import { CompleteOrderPage } from "./page-actions/complete-order-page"
import { COMPLETE_MESSAGE, DESCRIPTION_COMPLETE_MESSAGE } from "../const/values"

const loginPage = new LoginPage()
const productPage = new ProductPage()
const cartPage = new CartPage()
const personalInformationPage = new PersonalInformationPage()
const descriptionPage = new DescriptionPage()
const completeOrderPage = new CompleteOrderPage()

describe('example to-do app', () => {
    beforeEach(() => {
      cy.visit('/')
      loginPage.login(USER_NAME, PASSWORD)
    })
      it('buy item', () => {
        productPage.searchProduct()
        productPage.cartButton.click()
        cartPage.validateSelectedProduct()
        cartPage.checkoutBtn.click()
        personalInformationPage.fillOutInformation(FNAME, LNAME, ZIPCODE)
        descriptionPage.validateOverviewProduct()
        descriptionPage.finishBtn.click()
        completeOrderPage.finishOrderMessage.should('have.text', COMPLETE_MESSAGE)
        completeOrderPage.descriptionOrderMessage.should('have.text', DESCRIPTION_COMPLETE_MESSAGE)
      })
})