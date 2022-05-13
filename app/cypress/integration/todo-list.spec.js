context('smart Tag', () => {
  beforeEach(() => {
    cy.visit('../../todo-list.html')
  })
  it('should add 4 todos list then remove 2', () => {
    cy.dataCy("input-todo-list").type("Maths");
    cy.dataCy('button-add').click()
    cy.dataCy("input-todo-list").type("Anglais");
    cy.dataCy('button-add').click()
    cy.dataCy("input-todo-list").type("Francais");
    cy.dataCy('button-add').click()
    cy.dataCy("input-todo-list").type("Histoire");
    cy.dataCy('button-add').click()

    cy.dataCy('content-todo').contains("Anglais").next().click() 

    cy.dataCy('total-todo').should('have.text', '3');

});


})
