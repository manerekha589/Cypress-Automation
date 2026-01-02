  describe('Login Test Cases', () => {

  beforeEach(() => {
    cy.visit('https://staging-client.dokshop.com')
  })
     // Test Case 1: Valid login
  it('should login with valid credentials', () => {
  cy.get('#cookieConsent button.small', { timeout: 10000 }) .should('be.visible').click({ force: true });

  cy.get('#AccessCode').type('Rymes')
  cy.get('#Username').type('DevUser')
  cy.get('#Password').type('prismaUX24')
  cy.get("button[type='submit']").click()
  cy.contains('Welcome', { timeout: 20000 }).should('be.visible')
  })

    // Test Case 2: Invalid password
  it('should show error for invalid password', () => {
  cy.get('#AccessCode').type('Rymes')
  cy.get('#Username').type('DevUser')
  cy.get('#Password').type('prisma24')
  cy.get("button[type='submit']").click()
  cy.contains('Invalid login.').should('be.visible')
  })

    // Test Case 3: Invalid username
  it('should show error for invalid username', () => {
  cy.get('#AccessCode').type('Rym')
  cy.get('#Username').type('DevUser')
  cy.get('#Password').type('prisma24')
  cy.get("button[type='submit']").click()
  cy.contains('Invalid login.').should('be.visible')
  })

     // Test Case 4: Empty username and password
  it('should show validation error for empty fields', () => {
  cy.get("button[type='submit']").click()
  cy.contains('The User Name field is required.\nThe Password field is required.').should('be.visible')
  })

    // Test Case 5: Password masked
  it('should mask password field', () => {
  cy.get('#Password').should('have.attr', 'type', 'password')
  })
}) 
