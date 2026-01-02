describe('Checkout with Net Term - Cypress', () => {

  // ---------------------
  // Test Data
  // ---------------------
  const baseUrl = 'https://staging-client.dokshop.com'
  const productName = 'TheDishTShirtSmall'
  const address = '2947 Brick Church Pike'
  const city = 'Phoenix'
  const region = 'Arizona'
  const postalCode = '85040'
  const orderDescription = 'Test Order - Do not produce'
  const phoneNumber = '888-365-7411'

  // ---------------------
  // Save login session
  // ---------------------
  beforeEach(() => {
    cy.session('dokshop-login', () => {
      cy.login()          // calls the custom login command
    })

    cy.visit(baseUrl)     // load the page AFTER session is restored
  })

  // ---------------------
  // TEST 1 - Login verification
  // ---------------------
  it('logs in successfully', () => {
    cy.contains('Welcome').should('be.visible')
    cy.get('input.input-group-field').should('be.visible')
  })

  // ---------------------
  // TEST 2 - Search and add product to cart
  // ---------------------
  it('Add product to cart and submits the order successfully', () => {
    cy.get('input.input-group-field').click().clear().type(productName)
    cy.get('div.product-search button').click()

    cy.get('#order_8226_72637').click()
    cy.get('#inputOrderQuantity').clear().type('2')
    cy.get('#btnAddToCart').click()
    cy.get('div.cart-footer a.checkout-cart').click()

    // Fill address if first time
    // cy.get('body').then($body => {
    //   if ($body.find('#AddressLine1').length) {
    //     cy.get('#AddressLine1').clear().type(address)
    //     cy.get('#City').clear().type(city)
    //     cy.get('#Region').clear().type(region)
    //     cy.get('#PostalCode').clear().type(postalCode)
    //     cy.contains('button', 'Save').click()
    //   }
   

    cy.contains('button', 'Continue').click()

    // Select shipping method
    // cy.get("select[data-references='4746502']")
    //   .select('316')
    //   .should('have.value', '316')

    cy.get('#CheckoutButton').click()

    // Fill order info
    cy.get('#OrderDescription').type(orderDescription)
    cy.get('#OrderPhone').type(phoneNumber)
    cy.get('#InvoiceEmailCheck').check()

    // Place order
    cy.get('#submitButton').click()

    // Verify success
    cy.contains('strong', 'Thank you for your order!', { timeout: 20000 })
      .should('be.visible')

    cy.get("a[title='Manage Order']").should('be.visible')
  })

 })

    