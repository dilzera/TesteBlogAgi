describe('Filtrando dados pela lupa de pesquisa', () => {
  it('filtrando por numeros', () => {
    cy.visit('https://blogdoagi.com.br')
    cy.get('#search-open').click()
    cy.get('.desktop-search > .search-form > label > .search-field').type("12")
    cy.get('.desktop-search > .search-form > .search-submit').click()
    cy.get('#post-3394 > .meta-main-wrap > .entry-main > .entry-header > .entry-title > a').contains('12')
    cy.get('#post-2726 > .meta-main-wrap > .entry-main > .entry-header > .entry-title > a').contains('12')
  })
})

  it('filtrando por caracteres especiais', () => {
    cy.visit('https://blogdoagi.com.br')
    cy.get('#search-open').click()
    cy.get('.desktop-search > .search-form > label > .search-field').type("%")
    cy.get('.desktop-search > .search-form > .search-submit').click()
    cy.get('.content-wrap').contains('%')
    })