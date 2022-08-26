import * as config from "./config.js";
import { getRandomN, shuffle } from "./randomizer.js";

let [ancient, difficulty, deck, spread] = [null, null, null, null];

const difficultiesBlock = document.querySelector(".difficulties");
difficultiesBlock.addEventListener("click", setDifficulty);
const ancientsBlock = document.querySelector(".ancients");
ancientsBlock.addEventListener("click", setAncient);
const start = document.querySelector(".go");
start.addEventListener("click", getDeck);
const colors = Object.keys(config.cards);
const stages = document.querySelectorAll(".stage");

function setDifficulty(event) {
    difficulty = config.difficulties[event.target.dataset.level];
}

function setAncient(event) {
    ancient = event.target.dataset.ancient === "random" ? Object.values(config.ancients)[getRandomN(0, Object.keys(config.ancients).length - 1)] : config.ancients[event.target.dataset.ancient];
}

function getDeck() {
    if (!ancient || !difficulty) return;
    deck = JSON.parse(JSON.stringify(config.cards));
    const needCards = colors.reduce((r, e) => (r[e] = ancient.pack[e].reduce((s, c) => s + c, 0), r), {});
    
    if (difficulty.forbidden) colors.forEach(color => delete deck[color][difficulty.forbidden]);
    
    if (difficulty.required && difficulty.remaining) {
        const remainingN = {};
        colors.forEach(color => remainingN[color] = needCards[color] - deck[color][difficulty.required].length);
        
        for (let color in remainingN) {
            if (remainingN[color] <= 0) {
                delete deck[color][difficulty.remaining];
                deck[color][difficulty.required] = shuffle(deck[color][difficulty.required]).slice(0, remainingN[color] === 0 ? deck[color][difficulty.required].length : remainingN[color]);
            }
            else deck[color][difficulty.remaining] = shuffle(deck[color][difficulty.remaining]).slice(0, remainingN[color]);
        }
        colors.forEach(color => deck[color] = shuffle(Object.values(deck[color]).flat()));
    }

    if (!difficulty.required && !difficulty.remaining) {
        colors.forEach(color => deck[color] = shuffle(Object.values(deck[color]).flat()).slice(0, needCards[color]));
    }
    getSpread(deck);
    tracking();
}

function getSpread(deck) {
    spread = colors.reduce((r, e) => (r[e] = Array.from({length: ancient.pack[colors[0]].length}, (_, i) => `stage${i + 1}`).reduce((r, e) => (r[e] = [], r), {}), r), {});
    colors.forEach(color => ancient.pack[color].forEach((n, i) => Array.from({length: n}).forEach(_ => spread[color][`stage${i + 1}`].push(deck[color].pop()))));
    
    console.log(spread);
}

function tracking() {
    stages.forEach((_, i) => colors.forEach(color => document.querySelector(`.stage-${i + 1} > .${color}`).textContent = spread[color][`stage${i + 1}`].length));
}
