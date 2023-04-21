let input = document.querySelector('.login-input');
let button = document.querySelector('.login-button');

function validadeInput(event) {
    let target = event.target;
    if(target.value.length > 2) {
        button.removeAttribute('disabled');
        return;
    }
    button.setAttribute('disabled','');
}

input.addEventListener('input', validadeInput);