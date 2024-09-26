describe('TC08: Add out-of-stock product to cart', () => {
  it('Should not be able to add product to cart and give an error', () => {
    cy.readFile('cypress/fixtures/userCredentials.json').then((user) => {
      cy.visit('https://sneakervault.onrender.com/signin');
      cy.get('#email').type(user.email);
      cy.get('#password').type(user.password);
      cy.get(':nth-child(3) > .btn').click();
    });
    cy.wait(2000);
    cy.get('.card').then(($cards) => {
      const outOfStockProducts = [];
      $cards.each((index, card) => {
        const title = Cypress.$(card).find('.card-title').text();
         const addToCartButton = Cypress.$(card).find('.btn');
         if (addToCartButton.is(':hidden') || addToCartButton.is(':disabled')) {
          outOfStockProducts.push(title);
        }
      })
      if (outOfStockProducts.length > 0) {
        const randomIndex = Math.floor(Math.random() * outOfStockProducts.length);
        const selectedProduct = outOfStockProducts[randomIndex];
        cy.get('.card').contains(selectedProduct).click();
      } else {
        cy.log('No out-of-stock products available to select.');
      }
    });
  });
});