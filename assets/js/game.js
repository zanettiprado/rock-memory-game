const grid = document.querySelector('.grid');

const singers = [
    'amy',
    'bono',
    'dave',
    'elvis',
    'eric',
    'freedy',
    'kurt',
    'michael',
    'slash',
    'tina',
];

const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

const createCard = (singer) => {

    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');

    front.style.backgroundImage = `url('../images/${singer}.png')`;

    card.appendChild(front);
    card.appendChild(back);

    return card;

}

const laodGame = () => {

    singers.forEach((singer) => {

        const card = createCard(singer);

        grid.appendChild(card);
    });
}
laodGame();