import { SearchPage } from '../page-objects/order-page'
import { ValidationUtils } from '../utils/search-validation-utils'

describe('Search for books', () => {
    const page = new SearchPage()
    const validator = new ValidationUtils(page)

    beforeEach( () => {
        page.navigate()
    })

    it('User should be able to order 50 Harry Potter fiction books', () => {

        page.checkRadioButton1("Fiction")
        page.getSelectedBooks("Harry Potter")
        cy.get('input[name="submit"]').click()
        //validator.validateNumberOfUnits()
        //validator.validatePrice()
        page.placeOrder('50','35.80')
    })

    it('User should be able to order a drama called \“The Rainbow”', () => {
          page.checkRadioButton1("Drama")
          page.getSelectedBooks("The Rainbow")
          //validator.validateNumberOfUnits()
          //validator.validatePrice()
          page.placeOrderDiscount('1','125','10')
          cy.get("td:nth-child(7)").each(($e1, index, $list) => {
          const text = $e1.text();
          if (text.includes("$ 112.50")) {
          cy.get("td:nth-child(8)").click()

          cy.window().then(function(promptelement){
            cy.stub(promptelement, "prompt").returns("Are you sure?")
            cy.contains('Yes, Delete it!').click()
            //cy.get('[type="button"]').contains('Yes, Delete it!').click()
           });
        }
    })
  })
})
