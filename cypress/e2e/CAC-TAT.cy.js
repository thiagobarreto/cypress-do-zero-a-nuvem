beforeEach(() =>{
  cy.visit("./src/index.html")
  cy.title().should('eq', 'Central de Atendimento ao Cliente TAT')
})


describe('Central de Atendimento ao Cliente TAT', () => {
  it('verifica o título da aplicação', () => {
cy.visit("./src/index.html")
cy.title().should('eq', 'Central de Atendimento ao Cliente TAT')
  })
})

describe('Preenche os campos obrigatórios e envia o formulário',() =>{
  it('Digita no campo nome', () => {
  cy.get('input[id="firstName"]').as('Nome').type('Nome')
  cy.get('@Nome').should('have.value','Nome')

  cy.get('input[id="lastName"]').as('Sobrenome').type('Sobrenome')
  cy.get('@Sobrenome').should('have.value','Sobrenome')

  cy.get('input[id="email"]').as('email').type('email@email.com')
  cy.get('@email').should('have.value','email@email.com')

  cy.get('textarea[id="open-text-area"]').as('areaLivre').type('Feedback mais texto', {delay: 100})
  cy.get('@areaLivre').should('have.value','Feedback mais texto')

  cy.get('button[type="submit"]').click()

  cy.get('[class="success"]').should('be.visible')
}
)})


describe('Exercicio extra 2', () => {
  it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', () => {
    cy.get('input[id="firstName"]').as('Nome').type('Nome')
    cy.get('@Nome').should('have.value','Nome')
  
    cy.get('input[id="lastName"]').as('Sobrenome').type('Sobrenome')
    cy.get('@Sobrenome').should('have.value','Sobrenome')
  
    cy.get('input[id="email"]').as('email').type('email')
    cy.get('@email').should('have.value','email')
  
    cy.get('textarea[id="open-text-area"]').as('areaLivre').type('Feedback mais texto', {delay: 100})
    cy.get('@areaLivre').should('have.value','Feedback mais texto')
  
    cy.contains('button','Enviar').click()
    
    cy.get('[class="error"]').should('be.visible')

  })
})

describe('Verificar campo telefone', () => {
  it('Foi digitado letras ao inves de numeros no campo tel', () => {
    cy.get('input[id="phone"]').as('Phone').type('abc')
    cy.get('@Phone').should('have.value','')
  })
})

describe('Preenche e limpa os campos obrigatórios e envia o formulário',() =>{
  it('Preenche e limpa os campos', () => {

  cy.get('input[id="firstName"]').as('Nome').type('Nome')
  cy.get('@Nome').should('have.value','Nome')
  cy.get('input[id="firstName"]').clear()
  cy.get('@Nome').should('have.value','')

  cy.get('input[id="lastName"]').as('Sobrenome').type('Sobrenome')
  cy.get('@Sobrenome').should('have.value','Sobrenome')
  cy.get('input[id="lastName"]').clear()
  cy.get('@Sobrenome').should('have.value','')

}
)})


describe('Exercicio extra 6', () => {
  it('exibe mensagem de erro ao submeter o formulário em branco', () => {
    
    cy.contains('button','Enviar').click()
    
    cy.get('[class="error"]').should('be.visible')

  })
})

describe('Testando comands fill', () =>{
  it('Testa o comando criado para facilitar o preenchimento e também envia o form',() =>{
    cy.fillMandatoryFieldsAndSubmit()
  })
})


describe ('Lesson 3', () =>{
  it('Seleciona um produto (Youtube) por seu texto', () => {
    cy.get('select[id=product').select('YouTube')
    cy.get('select').should('have.value','youtube')
  })

  it('marca o tipo de atendimento Feedback', () => {
    cy.get('input[type=radio]').check()
  })

  it('marca cada tipo de atendimento', () => {
    cy.get('input[type=radio]').each((typeOfService)=>{
      cy.wrap(typeOfService).check().should('be.checked')
    })
  })
  
  it('marca cada tipo de Contato', () => {
    cy.get('input[type=checkbox]').each((typeOfContact)=>{
      cy.wrap(typeOfContact).check().should('be.checked')
      cy.get('input[type=checkbox]').last().uncheck()
    })
  })

  describe('Testando comands Check', () =>{
    it('Testa os comandos Check',() =>{
      cy.get('input[id=email-checkbox').check().should('be.checked')
      cy.get('input[id=phone-checkbox').check().should('be.checked')
      cy.get('input[id=phone-checkbox').uncheck().should('not.be.checked')
    })
  })


  describe('Seleciona arquivo pasta fixtures', () =>{
    it('Seleciona arquivo da pasta fixtures',() =>{
      cy.get('#file-upload').selectFile('cypress/fixtures/example.json')
    })
  })


})