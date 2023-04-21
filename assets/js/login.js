/** 
 * Declare variables for changing DOM elements
 * and to get players information.
 */
let input = document.querySelector('.login-input');
let button = document.querySelector('.login-button');
/** 
 * Function to validate the player's name and check if they are using a valid name.
 * more than 3 characteres is required;
 * if they are following the requirements the button play will be able to start the game.
 */
function validadeInput(event) {
    let target = event.target;
    if(target.value.length > 2) {
        button.removeAttribute('disabled');
        return;
    }
    button.setAttribute('disabled','');
}
/**
 * Event lister to hear the function validade input function 
 */
input.addEventListener('input', validadeInput);