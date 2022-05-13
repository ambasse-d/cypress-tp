context('smart Tag', () => {
  beforeEach(() => {
    cy.visit('../../component-smart-tag.html')
  })
  it('should display tag when on hover the bloc', () => {
    cy.dataCy('hover-see-more').trigger('mouseover');
    cy.dataCy("tag-view").should('be.visible');
});

it('should not display tag when mouse leave the bloc', () => {
    cy.dataCy('hover-see-more').trigger('mouseover');
    cy.dataCy("tag-view").should('be.visible');
    cy.get('body').click(0,0);
    cy.dataCy("tag-view").should('not.be.visible');
});

})
