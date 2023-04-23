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
/**
 * const to create card using the elements above. It will take the elements, match with
 * each class and get information from our arrays and bring the images from the folder. 
 */
const createCard = (singer) => {

    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');

    front.style.backgroundImage = `url('../assets/images/${singer}.png')`;

    card.appendChild(front);
    card.appendChild(back);

    return card;
}
/**
 * function to load the game 
 * It will create the 10 cards with each singer as per our array name.
 */
const laodGame = () => {

    const duplicateSingers = [ ...singers, ...singers]
    duplicateSingers.forEach((singer) => {

        const card = createCard(singer);

        grid.appendChild(card);
    });
}
laodGame();