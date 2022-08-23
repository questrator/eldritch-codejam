
const levelNames = ["supereasy", "easy", "standart", "hard", "superhard"];
const levelsBlock = document.querySelector(".levels");
levelsBlock.addEventListener("click", setLevel);

function setLevel(event) {
    localStorage.setItem("difficulty", event.target.dataset.level);
}

export {setLevel};