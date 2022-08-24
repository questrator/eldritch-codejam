import getRandomN from "./randomizer.js";
import {ancients, difficulties, cards} from "./config.js";

function setSpread() {
    const difficulty = localStorage.getItem("difficulty");
    const ancient = localStorage.getItem("ancient");
    
    const difficultySet = difficulties[difficulty];
    
    const ancientSet = ancients[ancient].spread;
    
    const cardsSet = cards;
    const required = difficultySet.required;
    const forbidden = difficultySet.forbidden;
    const remaining = difficultySet.remaining;

    function filterCards(cards, required, forbidden, remaining) {
        const set = Object.assign({}, cards);
        const firstQueue = [];
        const secondQueue = [];

        if (forbidden) {
            for (let key in set) {
                delete set[key][forbidden];
            }
        }
        
        if (required) {
            console.log("required", required)
        }
        
        if (remaining) {
            
        }

        console.log(set);
        console.log(ancientSet);
        
        return set;
    }
    filterCards(cards, required, forbidden, remaining);

}

export {setSpread};