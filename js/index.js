//variables

const modalVariables = {
    modal: document.getElementById('modal'),
    btnCancel: document.getElementById('btnCancel'),
    btnAccept: document.getElementById('btnAccept')
}
const formVariables = {
    form: document.getElementById('form'),
    inputName: document.getElementById('inputName'),
    inputLabelName: document.getElementById('labelName'),
    inputEmail: document.getElementById('inputEmail'),
    inputRandomNumber: document.getElementById('inputRandom'),
    btnSubmit: document.getElementById('inputBtn')
}
const darkVariables = {
    btnDarkMode: document.getElementById('darkMode')
}


//eventos
window.addEventListener('load', () => {
    getRandomNumber();
    onlyText(formVariables);
    validateEmail(formVariables.inputEmail);
    isActiveDarkMode();
})
formVariables.form.addEventListener('submit', (event) => {
    const { modal, btnCancel, btnAccept } = modalVariables;

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
darkVariables.btnDarkMode.addEventListener('click', (e) => {
    document.body.classList.toggle('body-dark');
    localStorage.setItem("dark-mode", "true")
    darkVariables.btnDarkMode.firstElementChild.setAttribute('src', './images/sun.png');
    if (!document.body.classList.contains('body-dark')) {
        localStorage.setItem("dark-mode", "false")
        darkVariables.btnDarkMode.firstElementChild.setAttribute('src', './images/moon.png');
    }
})
//funciones
function getRandomNumber() {
    const { inputRandomNumber } = formVariables;
    let randomNumber = Math.random().toString().slice(2, 8);
    let icon = inputRandomNumber.nextElementSibling.style.color = '#8dcd8d';
    inputRandomNumber.value = randomNumber;
}
function onlyText({ inputName, inputLabelName, btnSubmit }) {
    inputName.addEventListener('keyup', (e) => {
        let value = e.target.value;
        //usando una expresion regular
        if (/[0-9]/.test(value)) {
            inputName.classList.add('is-invalid');
            inputLabelName.innerHTML = 'Nombre  ( Este campo solo acepta letras )';
            inputName.nextElementSibling.style.color = '#e95252'

            btnSubmit.style.cursor = 'not-allowed'
            btnSubmit.setAttribute('disabled', true)
        } 
        else if(value.length == 0 ){
            inputName.nextElementSibling.style.color = 'transparent'
            inputLabelName.innerHTML = 'Nombre';
            inputName.classList.remove('is-invalid');
        }
        else {
            inputName.classList.remove('is-invalid');
            inputLabelName.innerHTML = 'Nombre';
            inputName.nextElementSibling.style.color = '#8dcd8d';

            btnSubmit.style.cursor = 'pointer'
            btnSubmit.removeAttribute('disabled')
        }
    })
}
function validateEmail(email) {
    email.addEventListener('keyup', () =>{
        let value = email.value;
        let re = /\S+@\S+\.\S+/;
        if(re.test(value)){
            email.classList.remove('is-invalid');
            email.nextElementSibling.style.color = '#8dcd8d';
        }
        else if(value.length == 0){
            email.nextElementSibling.style.color = 'transparent';
            email.classList.remove('is-invalid');
        }
        else{
            email.classList.add('is-invalid');
            email.nextElementSibling.style.color = '#e95252';
        }
    })
}
function isActiveDarkMode() {
    let value = localStorage.getItem("dark-mode");
    const { btnDarkMode } = darkVariables;

    if (value == "true") {
        document.body.classList.add('body-dark');
        btnDarkMode.firstElementChild.setAttribute('src', './images/sun.png');
    } else {
        document.body.classList.remove('body-dark');
        btnDarkMode.firstElementChild.setAttribute('src', './images/moon.png');
    }
}