
const levelsBlock = document.querySelector(".levels");
levelsBlock.addEventListener("click", setLevel);

function setLevel(event) {
    console.log(event.target.dataset.level);
}

export {setLevel};