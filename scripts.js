$('.forms').submit(function(e) {
  e.preventDefault();
  let valor = $('#nome-tarefa').val()
  $(`
    <li>${valor}</li>
  `).appendTo('#tarefas')
})