describe('My Smoke Test', function () {
  it('Runs without fail', function () {
    expect(true).to.equal(true)
  })
})

describe('The page header', function () {
  it('has the right words in it', function () {
    cy.visit('localhost:5000')
    cy.get('h1').contains('Markdown Preview')
  })
})

describe('The Source text area', function () {
  it('is present on the page', function () {
    cy.visit('localhost:5000')
    cy.get('form').within(() => {
      cy.get('textarea#source').should('be.visible')
    })
  })
})
