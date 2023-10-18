const button = document.getElementById("boton-especial")
const text = document.getElementById("texto")
let contador = 0

button.addEventListener('click', () => {
  contador++
  actualizarContador()
  console.log("Click!")
})

function actualizarContador() {
  text.innerHTML = contador
}