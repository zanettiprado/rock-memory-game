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
 */
let firstCard = '';
let secondCard = '';

/** 
 * const to create elements with the same classe we have created before in HTML document 
 * from now elements will be created here in js matching this create element and create card const
 */
const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

const checkGameOver = () => {
    const matchedCards = document.querySelectorAll('.match-card');

    if (matchedCards.length === 20 ) {
        alert('You win!!')
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
        
        checkGameOver();

    } else {
        setTimeout(() => {

            firstCard.classList.remove('turn-card');
            secondCard.classList.remove('turn-card');
            firstCard = '';
            secondCard = '';
        }, 900)

    }
};

const turnCard = ({
    target
}) => {

    if (target.parentNode.className.includes('turn-card')) {
        return;
    }

    if (firstCard === '') {
        target.parentNode.classList.add('turn-card');
        firstCard = target.parentNode;
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
laodGame();