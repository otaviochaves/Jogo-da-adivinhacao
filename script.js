const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
const h2Text = document.querySelector('.screen2 h2')
let randomNumber = Math.round(Math.random() * 10) // foi trocado de const para let, para colocar lá embaixo
let xAttempts = 1;

document.addEventListener('click', (event) =>
{
    if (event.target !== inputVelocidadeDeCorte && event.target !== inputDiametroDaPeca)
    {
        inputVelocidadeDeCorte.blur();
        inputDiametroDaPeca.blur();
    }
});


btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', function (e)
{
    if (e.key == 'Enter' && screen1.classList.contains('hide'))
    {
        handleResetClick()
    }
})


function handleTryClick (event)
{
    event.preventDefault()

    let inputValue = document.querySelector('input').value

    if (randomNumber == Number(inputValue))
    {
        toggleScreen()
        h2Text.innerHTML = `<h2>Acertou em ${xAttempts} tentativas</h2>`
    } else if (Number(inputValue) < 0 || Number(inputValue) > 10)
    {
        alert('Digite um número entre 0 e 10')
    } else if (inputValue.length == "" || !(Number(inputValue)))
    {
        alert('Erro. Digite um número válido')
    }

    document.querySelector('input').value = ""
    xAttempts++
}

function handleResetClick ()
{
    toggleScreen()
    xAttempts = 1
    randomNumber = Math.round(Math.random() * 10)
}

function toggleScreen ()
{
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}