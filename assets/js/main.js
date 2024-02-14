//VARIABLES
const screenOne = document.querySelector('.screenOne');
const screenTwo = document.querySelector('.screenTwo');
const btnRefresh = document.querySelector('#refreshBtn');
const btnTry = document.querySelector('#btnTry');
const tryText = document.querySelector('.attempsText');
const inputNumber = document.querySelector('#inputNumber')

let randomNumber = Math.round(Math.random() * 10);
let xAttemps = 1

//EVENTS
btnTry.addEventListener('click', handleTryClick)
btnRefresh.addEventListener('click', handleRefreshClick)
document.addEventListener('keypress', keydownEnter)

//FUNCTIONS
function handleTryClick(event) {
    event.preventDefault()
    callAlerts()
    if (Number(inputNumber.value) == randomNumber) {
        toggleScreens()

        if (xAttemps == 1) {
            tryText.innerText = `acertou em ${xAttemps} tentativa!`
        } else {
            tryText.innerText = `acertou em ${xAttemps} tentativas!`
        }
    }
    inputNumber.value = "";
    xAttemps++
}

function handleRefreshClick() {
    toggleScreens()
    xAttemps = 1
    randomNumber = Math.round(Math.random() * 10);
}

function toggleScreens() {
    screenOne.classList.toggle('hide')
    screenTwo.classList.toggle('hide')
}

function keydownEnter(eventDown) {
    if (eventDown.key == "Enter" && screenOne.classList.contains('hide')) {
        handleRefreshClick()
    }
}

function callAlerts() {
    if (Number(inputNumber.value) < 0 || Number(inputNumber.value) > 10) {
        alert(`Número inválido`)
    }
}