describe('TC07: Add in-stock product to cart', () => {
  it('Should be able to add product to cart', () => {
    cy.readFile('cypress/fixtures/userCredentials.json').then((user) => {
      cy.visit('https://sneakervault.onrender.com/signin');
      cy.get('#email').type(user.email);
      cy.get('#password').type(user.password);
      cy.get(':nth-child(3) > .btn').click();
    });
    cy.wait(2000);
    cy.get('.card').then(($cards) => {
      const inStockProducts = [];
      $cards.each((index, card) => {
        const title = Cypress.$(card).find('.card-title').text();
        const addToCartButton = Cypress.$(card).find('.btn');
        if (addToCartButton.is(':visible')) {
          inStockProducts.push({ title, card });
        }
      });
      if (inStockProducts.length > 0) {
        const randomIndex = Math.floor(Math.random() * inStockProducts.length);
        const selectedProduct = inStockProducts[randomIndex];
        cy.wait(2000);
        cy.wrap(selectedProduct.card).click();
        cy.wait(2000);
        cy.get('.badge').contains('In Stock').should('be.visible');
        cy.get('.d-grid > .btn').click();
      } else {
        cy.log('No in-stock products available to select.');
      }
    });
  });
});