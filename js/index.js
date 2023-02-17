//variables

//modal
const modal = document.getElementById('modal');
const btnCancel = document.getElementById('btnCancel');
const btnAccept = document.getElementById('btnAccept');

//form
const form = document.getElementById('form');

//name
const inputName = document.getElementById('inputName');
const inputLabelName = document.getElementById('labelName')

//random
const inputRandomNumber = document.getElementById('inputRandom');

//button
const btnSubmit = document.getElementById('inputBtn')

//Dark Mode
const btnDarkMode = document.getElementById('darkMode');


//eventos
window.addEventListener('load', () => {
    getRandomNumber();
    onlyText(inputName);
    isActiveDarkMode()
})

form.addEventListener('submit', (event) => {
    event.preventDefault();
    modal.classList.add("modal-is-active")

    modal.addEventListener('click', (event) => {
        if (event.target == modal) modal.classList.remove("modal-is-active")
    })

    btnAccept.addEventListener('click', () => {
        event.target.submit();
    })

    btnCancel.addEventListener('click', () => {
        modal.classList.remove("modal-is-active")
    })
})

btnDarkMode.addEventListener('click', () => {
    document.body.classList.toggle('body-dark');
    localStorage.setItem("dark-mode", "true")
    btnDarkMode.firstElementChild.setAttribute('src', './images/sun.png');

    if (!document.body.classList.contains('body-dark')) {
        localStorage.setItem("dark-mode", "false")
        btnDarkMode.firstElementChild.setAttribute('src', './images/moon.png');
    }
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
            inputLabelName.innerHTML = 'Nombre  ( Este campo solo acepta letras )';

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
function isActiveDarkMode() {
    let value = localStorage.getItem("dark-mode");

    if (value == "true") {
        document.body.classList.add('body-dark');
        btnDarkMode.firstElementChild.setAttribute('src', './images/sun.png');
    } else {
        document.body.classList.remove('body-dark');
        btnDarkMode.firstElementChild.setAttribute('src', './images/moon.png');
    }
}