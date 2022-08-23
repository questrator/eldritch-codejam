

function setTracker(ancient) {
    const colors = ["green", "blue", "brown"];
    const stages = document.querySelectorAll(".stage");
    const spread = ancient.spread;

    stages.forEach((_, i) => {        
        colors.forEach(e => document.querySelector(`.stage-${i + 1} > .${e}`).textContent = spread[e][i]);
    });
}

export {setTracker};