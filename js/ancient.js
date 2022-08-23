import getRandomN from "./randomizer.js";
import ancientsConfig from "./ancientsConfig.js";
import {setTracker} from "./tracker.js";

const ancientsBlock = document.querySelector(".ancients");
ancientsBlock.addEventListener("click", setAncient);

function setAncient(event) {
    let ancient;
    ancient = event.target.dataset.ancient === "random"
    ? ancientsConfig[getRandomN(0, ancientsConfig.length - 1)]
    : ancientsConfig.find(e => e.id === event.target.dataset.ancient);
    localStorage.setItem("ancient", ancient.id);
    setTracker(ancient);
    return ancient;
}

export {setAncient};