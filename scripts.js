const nome_contato = document.getElementById('nome-contato')
const tel_contato = document.getElementById('tel-contato')
const form = document.getElementById('form-contato')
const lista_contatos = document.getElementById('lista-contatos')
let contatos = []

function listarContatos(nome, tel) {
  lista_contatos.innerHTML += `
  <tr>
  <td>${nome}</td>
  <td>${tel}</td>
  </tr>
    `
  console.log(nome, tel)
}

function addContato() {
  form.addEventListener('submit', (event) => {
    event.preventDefault()

    if (nome_contato.value !== '' && tel_contato.value !== '') {
      listarContatos(nome_contato.value, tel_contato.value)
    }

    nome_contato.value = ''
    tel_contato.value = ''
  })
}

addContato()
