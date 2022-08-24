import { difficulties } from "./config.js";
import { setDifficulty } from "./app.js";

const difficultiesBlock = document.querySelector(".difficulties");
difficultiesBlock.addEventListener("click", getDifficulty);

function getDifficulty(event) {
    const difficulty = difficulties[event.target.dataset.level];
    setDifficulty(difficulty);
    return difficulty;
}