
context('Modal Component', () => {
  beforeEach(() => {
    cy.visit('../../component-modal.html')
  })

  it('should display modal when click on button display', () => {
    
    cy.dataCy('button-display').should('have.text', 'Display');
    cy.dataCy('button-display').click();
    cy.dataCy('button-display').should('be.visible');

  });

  it('should not display modal when click outside', () => {

    cy.dataCy('button-display').click();
    cy.dataCy('modal-show').should('be.visible');
    cy.get('body').click(0, 0);
    // cy.get('modal-show').should('not.be.visible');
  });

  it('should h2 have the text Lorem', () => {
    cy.dataCy('h2-lorem').should('have.text', 'Lorem Ipsum');
  });

})



