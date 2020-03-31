describe('Home', () => {
  before(() => {
    cy.visit('/')
  })

  it('should render tagline', () => {
    cy.get('[data-cy="tagline"]')
      .scrollIntoView()
      .should('be.visible')
  })

  it('renders projects', () => {
    cy.get('[data-cy="project"]').should('be.visible')
  })

  it('shows project detail', () => {
    cy.get('[data-cy="project"]')
      .first()
      .click()
  })

  it('should render post-title', () => {
    cy.get('[data-cy="post-title"]')
      .scrollIntoView()
      .should('be.visible')
  })

  it('should render photos', () => {
    cy.contains('Philipp Rappold')
      .scrollIntoView()
      .click()

    cy.get('[data-cy="tagline"]').within(() => {
      cy.contains('photos')
        .scrollIntoView()
        .click()
    })

    cy.get('[data-cy="photo"]').should('be.visible')
  })
})
