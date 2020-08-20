// Procurar o botao
document.querySelector("#add-time")
// Quando clicar no botao
.addEventListener('click', cloneField)

// Executar uma acao
function cloneField() {
    // Duplicar os campos
  const newFieldContainer = document.querySelector('.schedule-item') .cloneNode(true)

    // Pegar os campos
    const fields = newFieldContainer.querySelectorAll('input')
    
    // Para cada campo, limpar
    fields.forEach(function(field) {
        //pegar o field do momento
        field.value = ""
    })

    // Colocar na pagina
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}