function Player(name, score, sign) {
    name: this.name;
    score: this.score;
    sign: this.sign;
}

function gameBoard(gamePos) {
}

const getInput = (function(){
    const background = document.querySelector('.background');
    const card = document.querySelector('.card');
    const playBtn = document.querySelector('.play-btn');

    function showModal() {
        playBtn.addEventListener('click', askForInput);
    }

    function askForInput() {
        background.style.visibility = 'visible';
        card.style.visibility = 'visible';
    }

    return {showModal}
})();