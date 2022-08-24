import * as config from "./config.js";
import "./ancient.js";
import "./difficulty.js";

let ancient = null;
let difficulty = null;

function setAncient(data) {
    ancient = data;
    console.log("ANCIENT", ancient.id);
}

function setDifficulty(data) {
    difficulty = data;
    console.log("DIFFICULTY", difficulty.id);
}

/* START */

const start = document.querySelector(".go");
start.addEventListener("click", getSpread);
const colors = Object.keys(config.cards);

function getSpread() {
    if (!ancient || !difficulty) return;
    const needCards = {};
    const allCards = {};
    const removeCards = {};
    colors.forEach(e => needCards[e] = ancient.spread[e].reduce((r, e) => r + e, 0));
    colors.forEach(e => allCards[e] = Object.values(config.cards[e]).flat().length);

    colors.forEach(e => removeCards[e] = Object.values(config.cards[e]).flat().length - ancient.spread[e].reduce((r, e) => r + e, 0));

    console.log(needCards)
    console.log(allCards)
    console.log(removeCards)
}

export {
    ancient,
    difficulty,
    setAncient,
    setDifficulty
};