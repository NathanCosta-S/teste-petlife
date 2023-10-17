
const elementosDuvida = document.querySelectorAll('.duvida, .duvidas')

elementosDuvida.forEach(function (duvida) {
  duvida.addEventListener('click', function () {
    duvida.classList.toggle('ativa')
  })
})