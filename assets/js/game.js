const grid = document.querySelector('.grid');

const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

const createCard = () => {

    const card = document.createElement('div', 'card');
    const front = document.createElement('div', 'face front');
    const back = document.createElement('div', 'face back');

    card.appendChild(front);
    card.appendChild(back);

    return card;

}

