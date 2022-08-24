import * as config from "./config.js";
import "./ancient.js";
import "./difficulty.js";

let ancient = null;
let difficulty = null;

function setAncient(data) {
    ancient = data;
    console.log("ANCIENT", ancient);
}

function setDifficulty(data) {
    difficulty = data;
    console.log("DIFFICULTY", difficulty);
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
    colors.forEach(e => needCards[e] = ancient.pack[e].reduce((r, e) => r + e, 0));
    colors.forEach(e => allCards[e] = Object.values(config.cards[e]).flat().length);
    colors.forEach(e => removeCards[e] = Object.values(config.cards[e]).flat().length - ancient.pack[e].reduce((r, e) => r + e, 0));
    console.log("need ", needCards);
    console.log("all ", allCards);
    console.log("remove ", removeCards);

    const spread = Object.assign({}, config.cards);

    if (difficulty.forbidden) {        
        for (let key in spread) {
            delete spread[key][difficulty.forbidden];
        }
    }
    
    if (difficulty.required) {
        console.log("required:", difficulty.required);
    }
    
    if (difficulty.remaining) {
        console.log("remaining:", difficulty.remaining);
        
    }
    
    console.log("ANCIENT PACK", ancient.pack);
    console.log("SPREAD", spread);
    return spread;
}

export {
    ancient,
    difficulty,
    setAncient,
    setDifficulty
};