//variables
//name
const inputName = document.getElementById('inputName');
const inputLabelName = document.getElementById('labelName')
//random
const inputRandomNumber = document.getElementById('inputRandom');
//button
const btnSubmit = document.getElementById('inputBtn')


//eventos
window.addEventListener('load', () => {
    getRandomNumber();
    onlyText(inputName);
})

//funciones
function getRandomNumber() {
    let randomNumber = Math.random().toString().slice(2, 8);
    inputRandomNumber.value = randomNumber;
}
function onlyText(input) {

    input.addEventListener('keyup', (e) => {
        let value = e.target.value;
        //usando una expresion regular
        if (/[0-9]/.test(value)) {
            inputName.classList.add('is-invalid');
            inputLabelName.innerHTML = ' ( No se permiten números )';

            btnSubmit.style.cursor = 'not-allowed'
            btnSubmit.setAttribute('disabled', true)
        } else {
            inputName.classList.remove('is-invalid');
            inputLabelName.innerHTML = 'Nombre';

            btnSubmit.style.cursor = 'pointer'
            btnSubmit.removeAttribute('disabled')
        }
    })
}