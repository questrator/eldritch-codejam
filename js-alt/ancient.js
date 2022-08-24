import { getRandomN } from "./randomizer.js";
import { ancients } from "./config.js";
import { setAncient } from "./app.js";

const ancientsBlock = document.querySelector(".ancients");
ancientsBlock.addEventListener("click", getAncient);

function getAncient(event) {
    const ancient = event.target.dataset.ancient === "random"
    ? Object.values(ancients)[getRandomN(0, Object.keys(ancients).length - 1)]
    : ancients[event.target.dataset.ancient];
    setAncient(ancient);
    return ancient;
}