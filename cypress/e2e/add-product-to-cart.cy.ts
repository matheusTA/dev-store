describe('add product to cart', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should be able to navigate the product page and add it to the cart', () => {
    cy.get('a[href^="/product"]').first().click()

    cy.url().should('include', '/product')

    cy.get('button')
      .contains('Adicionar ao carrinho', { matchCase: false })
      .click()

    cy.contains('Cart (1)', { matchCase: false }).should('exist')
  })

  it('should not count duplicated products on cart', () => {
    cy.get('a[href^="/product"]').first().click()

    cy.url().should('include', '/product')

    cy.get('button')
      .contains('Adicionar ao carrinho', { matchCase: false })
      .click()
    cy.get('button')
      .contains('Adicionar ao carrinho', { matchCase: false })
      .click()

    cy.contains('Cart (1)', { matchCase: false }).should('exist')
  })

  it('should be able to search for a product and ad  to the cart', () => {
    cy.searchByQuery('moletom')

    cy.get('a[href^="/product"]').first().click()

    cy.url().should('include', '/product')

    cy.get('button')
      .contains('Adicionar ao carrinho', { matchCase: false })
      .click()

    cy.contains('Cart (1)', { matchCase: false }).should('exist')
  })
})
