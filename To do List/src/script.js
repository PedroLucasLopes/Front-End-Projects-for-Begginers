'use strict';

    const input = document.querySelector("input")
    const headerBtn = document.querySelector("#btnHeader")
    const list = document.querySelector("#list")

const model = (item) => {
    const itemList = document.createElement('li')

    itemList.innerHTML = item

    const btnRemover = document.createElement('button')
    btnRemover.classList.add("btnList")

    btnRemover.innerText = 'Remover'

    btnRemover.onclick = function () {
      this.parentNode.remove()
    }

    itemList.appendChild(btnRemover)

    list.appendChild(itemList)
}

headerBtn.addEventListener("click", function (event) {

    if(input.value === "" || input.value === " ") {
        alert("Preencha o campo com um item")

    } else {
        model(input.value)
        input.value = ""
    }
    
    event.preventDefault()
})