import getRandomN from "./randomizer.js";
import {ancients, difficulties} from "./config.js";
import {setTracker} from "./tracker.js";

const ancientsBlock = document.querySelector(".ancients");
ancientsBlock.addEventListener("click", setAncient);

function setAncient(event) {
    const ancient = event.target.dataset.ancient === "random"
    ? ancients[getRandomN(0, ancients.length - 1)]
    // : ancients.find(e => e.id === event.target.dataset.ancient);
    : ancients[event.target.dataset.ancient];
    localStorage.setItem("ancient", ancient.id);
    setTracker(ancient);
    return ancient;
}

export {setAncient};