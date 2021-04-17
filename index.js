
$('html').keypress(function (event) {
  if (event.key === "Enter") {
    var dados = $("#addToDo").val()
    $('ul').prepend('<li><span><i id="oi" class="fa fa-trash"></i></span> ' + dados + ' </li>')
    $('#addToDo').val('')
    apagarItem()
  }
})

$('span').on({

  click: function () {
    $(this).parentsUntil('ul').remove()
  }

})

function apagarItem() {

  $(document).ready(function () {
    $('span').on({

      click: function () {
        $(this).parentsUntil('ul').remove()
      }

    })

  })
}
