//Pegar o input, onde vai ser escrito as letras; (X)
// Pegar a div, onde vai ser inserido o texto da contagem das letras; (X)
//Contar quantos caracteres tem dentro do input; (X)
//Mostrar quantos caracteres tem dentro do input; (X)

    const input = document.querySelector("input")

    input.addEventListener("keydown", function (event) {

        const letterCounter = document.querySelector("div")
        const inputValue = input.value.length

        if (event.key === 'Backspace') {

            letterCounter.innerHTML = `Letter Counter: ${inputValue - 1}`

        } else {

            letterCounter.innerHTML = `Letter Counter: ${inputValue + 1}`

        }

        if (event.key === 'Backspace' && inputValue === 0) {

            letterCounter.innerHTML = `Letter Counter: 0`

        }

})