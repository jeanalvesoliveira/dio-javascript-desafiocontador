let currentNumber = document.getElementById('currentNumber')

let incButton = document.getElementsByName('adicionar')[0]
let decButton = document.getElementsByName('subtrair')[0]

function increment() {
    currentNumber.innerHTML++
    isNegative()
    disableIncButton()
}

function decrement() {
    currentNumber.innerHTML--
    isNegative()
    disableIncButton()
}

function disableIncButton() {
    if (currentNumber.innerHTML >= 10) {
        incButton.disabled = true
        incButton.style.borderColor='#999999'
        incButton.style.backgroundColor='#4d4d4d'
        incButton.style.color='#999999'
    } else {
        incButton.disabled = false
        incButton.style.borderColor='lightcoral'
        incButton.style.backgroundColor='rgb(241, 214, 214)'
        incButton.style.color='lightcoral'
    }
}

function isNegative() {
    if (currentNumber.innerHTML < 0) {
        currentNumber.style.color = 'red'
    } else {
        currentNumber.style.color = '#000000'
    }
}

incButton.addEventListener('click', increment)
decButton.addEventListener('click', decrement)
