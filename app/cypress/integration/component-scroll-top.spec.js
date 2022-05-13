context('scrollToTop', () => {
    beforeEach(() => {
      cy.visit('../../component-scroll-top.html')
    })
    it('should display button when scroll down', () => {
        cy.dataCy('content-scroll').should('have.text', 'Scroll');
        cy.scrollTo(0, 500);
        cy.dataCy("btn-scroll-top").should('be.visible');
    });

    it('should scroll to top when click on top scroll button', () => {
        cy.scrollTo(0, 500);
        cy.dataCy("btn-scroll-top").click();
        cy.dataCy("btn-scroll-top").should('not.be.visible');
    });
  
  })
  