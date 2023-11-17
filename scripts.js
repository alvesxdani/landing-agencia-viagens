$(document).ready(function() {
  $('#phone').mask('(00) 00000-0000', {
    placeholder: 'Seu telefone'
  })
  $('#cpf').mask('000.000.000-00', {
    placeholder: 'CPF'
  })
  $('#cep').mask('00000-000', {
    placeholder: 'CEP'
  })
})