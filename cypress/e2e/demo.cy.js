describe('empty spec', () => {

  it('Caso Exitoso: Usuario y contraseña activos para el login', () => {
    cy.visit('http://automationpractice.com/index.php')
    cy.get('.login').click()
    cy.get('#email').type('guino_ptu1@ptu.com')
    cy.get('#passwd').type('ptu12345')
    cy.get('#SubmitLogin > span').click()
    cy.get('.info-account').should('contain', 'Welcome')
  })

  it('Caso Fallido: Usuario y contraseña inactivos para el login', () => {
    cy.visit('http://automationpractice.com/index.php')
    cy.get('.login').click()
    cy.get('#email').type('guino_ptu2ptu.com')
    cy.get('#passwd').type('ptu12345')
    cy.get('#SubmitLogin > span').click()
    cy.get('ol > li').should('contain', 'Invalid')
  })
})