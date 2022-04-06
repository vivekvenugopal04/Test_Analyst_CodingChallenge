/// <reference types="cypress" />

export class SearchPage {

     constructor() {
        this.url = 'https://react.simprocloud.com/build/index.html'
        this.radiobtnBook =  '[type="radio"]'
        this.booksList =  '.bookoptions'
        this.units = 'input[name="units"]'
        this.price = 'input[name="price"]'
        this.discountBtn = '[name="discount"]'
        this.discountField = 'input[name="discountvalue"]'

    }

    navigate() {
        cy.visit(this.url)
    }

    getSelectedBooks(val) {
        return cy.get(this.booksList).select(val).should("have.value", val);
    }

    checkRadioButton1(val) {
        return cy.get(this.radiobtnBook).check(val)
    }

    placeOrderDiscount(unitval,priceval,discountval) {
        cy.get(this.units).type(unitval)
        cy.get(this.price).type(priceval)
        cy.get(this.discountBtn).check()
        cy.get(this.discountField).type(discountval)
        cy.get('input[name="submit"]').click()
    }

    placeOrder(unitval,priceval) {
        cy.get(this.units).type(unitval)
        cy.get(this.price).type(priceval)
        cy.get('input[name="submit"]').click()
    }

    getErrorMessages() {

    }
}
