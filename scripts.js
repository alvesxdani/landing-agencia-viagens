$(document).ready(function() {
  $('.forms').submit(function(e) {
    e.preventDefault();
  
    let valor = $('#nome-tarefa').val()
  
    $(`
      <li>${valor}</li>
    `).appendTo('#tarefas')
  })

  $("ul").on("click", "li", function() {
    if (!$(this).hasClass("riscado")) {
      $(this).addClass("riscado");
    } else {
      $(this).removeClass("riscado");
    }
  });
});

