const difficultiesBlock = document.querySelector(".difficulties");
difficultiesBlock.addEventListener("click", setDifficulty);



function setDifficulty(event) {
    const difficulty = event.target.dataset.level;
    localStorage.setItem("difficulty", difficulty);
    console.log(difficulty);

    function getDifficultyCards(difficulty) {

    }
}

export {setDifficulty};