function Player(name, score, sign) {
    name: this.name;
    score: this.score;
    sign: this.sign;
}

function Opponent(name, score, sign) {
    name: this.name;
    score: this.score;
    sign: this.sign;
}

function gameBoard(gamePos) {
}

//SAVES INPUT

const getInput = (function(){
    const userNameInput = document.querySelector('#username');
    const opponentNameInput = document.querySelector('#opponentname');
    const selectionX = document.querySelector('.selection-x');
    const selectionO = document.querySelector('.selection-o');
    const startGameBtn = document.querySelector('.start-game-btn');

    selectionX.addEventListener('click', getInputSelection);
    selectionO.addEventListener('click', getInputSelection);
    startGameBtn.addEventListener('click', getInputNames);

    let newPlayerName;
    let newOpponentName;
    let newPlayerSymbol;
    let newOpponentSymbol;

    function getInputSelection() {
        newPlayerSymbol = this.textContent;
        console.log(newPlayerSymbol);
        if (newPlayerSymbol == 'X') {
            newOpponentSymbol = 'O'
        } else {
            newOpponentSymbol = 'X'
        }
    }

    function getInputNames() {
        console.log(userNameInput.value);
        if (userNameInput == '') {
            newPlayerName = 'Player';
        } else {
            newPlayerName = userNameInput;
        }
        console.log(newPlayerName);
        if (opponentNameInput == '') {
            newOpponentName = 'Bot';
        } else {
            newOpponentName = opponentNameInput;
        }
    }
    return {newPlayerName, newOpponentName, newPlayerSymbol, newOpponentSymbol}
})();

//POPS UP AND HIDES FORM

const renderForm = (function(){
    const background = document.querySelector('.background');
    const card = document.querySelector('.card');
    const playBtn = document.querySelector('.play-btn');
    const startGameBtn = document.querySelector('.start-game-btn');
    
    playBtn.addEventListener('click', showForm);
    startGameBtn.addEventListener('click', hideForm);

    function showForm() {
        background.style.visibility = 'visible';
        card.style.visibility = 'visible';
    }

    function hideForm() {
        background.style.visibility = 'hidden';
        card.style.visibility = 'hidden';
    }
})();