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
 * const to create elements with the same classe we have created before in HTML document 
 * from now elements will be created here in js matching this create element and create card const
 */
const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

let firstCard = '';
let secondCard = '';


const turnCard = ({ target }) => {

    if (target.parentNode.className.includes('turn-card')) {
        return;
    }

    if (firstCard === '') {
        target.parentNode.classList.add('turn-card');
        firstCard = target.parentNode; 
    } else if(secondCard === '') {
        target.parentNode.classList.add('turn-card');
        secondCard = target.parentNode;
    }


    

}

/**
 * const to create card using the elements above. It will take the elements, match with
 * each class and get information from our arrays and bring the images from the folder. 
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