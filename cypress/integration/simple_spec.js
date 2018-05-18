describe('My Smoke Test', function () {
  it('Runs without fail', function () {
    expect(true).to.equal(true);
  });
});


describe('The Page', function () {

  before(function () {
    cy.visit('localhost:5000');
  });

  it('has a headline', function () {
    cy.get('h1').contains('Markdown Preview');
  });

  it('has a source text area', function () {
    cy.get('textarea#source').should('be.visible');
  });

  it('has a preview text area', function () {
    cy.get('div#preview');
  });

  it('has a "render" button', function () {
    cy.get('button#render');
  });

  it('converts markdown to html', function () {
    cy.get('textarea#source').type('# Hello');
    cy.get('button').click();
    cy.get('div#preview').should('include', 'Hello');
  })
});
