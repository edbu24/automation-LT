export class LoginPage {
    get userNameField() {
        return cy.get('input[placeholder="Username"]')
    }

    get userPasswordField() {
        return cy.get('input[placeholder="Password"]')
    }

    get loginButton() {
        return cy.get('[id="login-button"]')
    }

    login(username, password) {
        this.userNameField.type(username)
        this.userPasswordField.type(password)
        this.loginButton.click()
    }
}