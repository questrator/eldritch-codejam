import * as config from "./config.js";
import { getRandomN, shuffle } from "./randomizer.js";

let ancient = null;
let difficulty = null;
let deck = null;

const difficultiesBlock = document.querySelector(".difficulties");
difficultiesBlock.addEventListener("click", setDifficulty);
const ancientsBlock = document.querySelector(".ancients");
ancientsBlock.addEventListener("click", setAncient);

function setDifficulty(event) {
    difficulty = config.difficulties[event.target.dataset.level];
    console.log("DIFFICULTY", difficulty);
}

function setAncient(event) {
    ancient = event.target.dataset.ancient === "random"
    ? Object.values(config.ancients)[getRandomN(0, Object.keys(config.ancients).length - 1)]
    : config.ancients[event.target.dataset.ancient];
    console.log("ANCIENT", ancient);
}

const start = document.querySelector(".go");
start.addEventListener("click", getDeck);
const colors = Object.keys(config.cards);
const cardTypes = Object.keys(config.cards[colors[0]]);

function getDeck() {
    if (!ancient || !difficulty) return;
    const deck = JSON.parse(JSON.stringify(config.cards));
    const needCards = {};
    colors.forEach(e => needCards[e] = ancient.pack[e].reduce((r, e) => r + e, 0));
    
    if (difficulty.forbidden) {        
        for (let color in deck) {
            delete deck[color][difficulty.forbidden];
        }
    }
    
    if (difficulty.required && difficulty.remaining) {
        const remainingN = {};
        colors.forEach(color => remainingN[color] = needCards[color] - deck[color][difficulty.required].length);
        
        for (let color in remainingN) {
            if (remainingN[color] <= 0) {
                delete deck[color][difficulty.remaining];
                deck[color][difficulty.required] = shuffle(deck[color][difficulty.required]).slice(0, remainingN[color] === 0 ? deck[color][difficulty.required].length : remainingN[color]);
            }
            if (remainingN[color] > 0) {
                deck[color][difficulty.remaining] = shuffle(deck[color][difficulty.remaining]).slice(0, remainingN[color]);
            }
        }
        colors.forEach(color => deck[color] = shuffle(Object.values(deck[color]).flat()));
    }

    if (!difficulty.required && !difficulty.remaining) {
        colors.forEach(color => deck[color] = shuffle(Object.values(deck[color]).flat()).slice(0, needCards[color]));
    }

    showCards(deck);
    return deck;
}

function showCards(deck) {
    console.log(config.cards);
    console.log(deck);

    colors.forEach(color => {
        for (let i = 0; i < deck[color].length; i++) {
            for (let diff in config.cards[color]) {
                if (config.cards[color][diff].includes(deck[color][i])) {
                    console.log(deck[color][i], color, diff);
                    
                }
            }
        }
    });
}

function getSpread(deck) {
    const spread = 
}
