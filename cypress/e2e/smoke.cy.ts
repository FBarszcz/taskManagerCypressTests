describe('Smoke test', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
    cy.get('.background_container > :nth-child(3)').contains('My Board')
  })
})