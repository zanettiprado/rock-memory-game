/** 
 * Declare variables for changing DOM elements
 * and to get players information.
 */
const input = document.querySelector('.login-input');
const button = document.querySelector('.login-button');
const form = document.querySelector('.login-form');

/** 
 * Validates the player's name and check if they are using a valid name.
 * more than 3 characteres and less than 13 is required go ;
 * if they are following the requirements the button play will be able to start the game.
 */
function validadeInput(event) {
    const target = event.target;
    if(target.value.length > 2 && target.value.length <= 12) {
        button.removeAttribute('disabled');
        return;
    }
    button.setAttribute('disabled','');
}
/** 
 * Handles the player information 
 * save the player name and send to display
 * and to call the main page of the game.
*/
function handleSubmit(event) {
    event.preventDefault();
    localStorage.setItem('player', input.value);
    window.location = 'game.html'


}
/**
 * Event listener to hear the function validade input function 
 */
input.addEventListener('input', validadeInput);
form.addEventListener('submit', handleSubmit);
