//to get the player name and send to main painel
const playerName = document.querySelector('.player')

//function that will create a grid
const grid = document.querySelector('.grid');

//cards name/image to create random cards with theses singers
const singers = [
    'amy',
    'bono',
    'dave',
    'elvis',
    'eric',
    'freddy',
    'kurt',
    'michael',
    'slash',
    'tina',
];
/**
 * let to identify it two cards are already turned out.
 * to get and player clicks 
 */
let firstCard = '';
let secondCard = '';
let clicks = 0;
/** 
 * const to create elements with the same classe we have created before in HTML document 
 * from now elements will be created here in js matching this create element and create card const
 */
const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}
/**
 * It check if the game has finished. If you turned and matched 20 cards it will finish. 
 * If the game finish a message will appear in the screen saying how many attemps you took to finish
 */
const checkGameOver = () => {
    const matchedCards = document.querySelectorAll('.match-card');

    if (matchedCards.length === 20) {
        const attempts = document.querySelector('.clicks').innerHTML;
        const message = `Well done! You took ${attempts} attempts.`;
        const playAgainBtn = createElement('button', 'play-again');
        playAgainBtn.innerText = 'Play again';
        playAgainBtn.addEventListener('click', () => {
            location.reload(); // Reload the page to restart the game
        });
        
        setTimeout(() => {
            const gameOverMessage = createElement('div', 'game-over-message');
        gameOverMessage.innerText = message;
        gameOverMessage.appendChild(playAgainBtn);
        grid.appendChild(gameOverMessage);
    }, 600)
    }
}
/**
 * It creates a new attribute to check if cards matchs
 * Else argument flip the card if they dont match with timout of few ms. 
 */
const checkCards = () => {
    const firstSinger = firstCard.getAttribute('data-singer');
    const secondSinger = secondCard.getAttribute('data-singer');

    if (firstSinger === secondSinger) {
        firstCard.firstChild.classList.add('match-card');
        secondCard.firstChild.classList.add('match-card');
        firstCard = '';
        secondCard = '';

        checkGameOver();// check if the game has finishe

    } else {
        setTimeout(() => {

            firstCard.classList.remove('turn-card');
            secondCard.classList.remove('turn-card');
            firstCard = '';
            secondCard = '';
        }, 600)

    }
};

/**
 * Function to count how many clicks player is applying while he is playing. 
 * It will count one click for it trying to match the cars it means for each two clicks he will receive 1 counted click
 */
const incrementClicks = () => {
    clicks++;
    document.querySelector('.clicks').innerHTML = clicks.toString().padStart(2, '0');
}

const turnCard = ({target}) => {

    if (target.parentNode.className.includes('turn-card')) {
        return;
    }

    if (firstCard === '') {
        target.parentNode.classList.add('turn-card');
        firstCard = target.parentNode;
        incrementClicks();
    } else if (secondCard === '') {
        target.parentNode.classList.add('turn-card');
        secondCard = target.parentNode;
    }

    checkCards();

}

/**
 * const to create card using the elements and classes dynamically.
 * It will take the elements, match with each class and get information 
 * from our arrays and bring the images from the folder. 
 * addEventlistner that matchs with the function to reveal the card
 */
const createCard = (singer) => {

    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');

    front.style.backgroundImage = `url('../assets/images/${singer}.png')`;

    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click', turnCard);
    card.setAttribute('data-singer', singer);

    return card;
}
/**
 * function to load the game 
 * It will create the 10 cards with each singer as per our array name.
 * duplicate const was overposted to create 2x our first array.
 * Method sort + math.random was used to shuffle the cards in the array.
 */
const laodGame = () => {

    const duplicateSingers = [...singers, ...singers];

    const shuffleCards = duplicateSingers.sort(() => Math.random() - .5);

    duplicateSingers.forEach((singer) => {

        const card = createCard(singer);

        grid.appendChild(card);
    });
}


window.onload = () => {
    const localName = localStorage.getItem('player');
    playerName.innerHTML = localName;
    laodGame();//check the player name and load the game
}