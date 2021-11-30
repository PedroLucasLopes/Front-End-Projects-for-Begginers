

function change() {
    const btn = document.querySelector('body')
    const colorPicker = document.querySelector('footer p')

    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)

    btn.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`

    colorPicker.textContent = `CSS: rgb(${red}, ${green}, ${blue})`
}