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
    startGameBtn.addEventListener('click', () => getInputNames());

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
        if (userNameInput == '') {
            newPlayerName = 'Player';
        } else {
            newPlayerName = userNameInput.value;
        }

        if (opponentNameInput == '') {
            newOpponentName = 'Bot';
        } else {
            newOpponentSymbol = opponentNameInput.value;
        }

    }

    function getPlayerName() {
        return newPlayerName;
    }

    function getOpponentName() {
        return newOpponentName;
    }

    function getPlayerSelection() {
        return newPlayerSymbol;
    }

    function getOpponentSelection() {
        return newOpponentSymbol;
    }

    return {getPlayerName, getOpponentName, getPlayerSelection, getOpponentSelection};
})();

//STORES PLAYER INFO INSIDE AN OBJECT

function storeInput() {
    const playerName = getInput.getPlayerName();
    const opponentName = getInput.getOpponentName();
    const playerSelection = getInput.getPlayerSelection();
    const opponentSelection = getInput.getOpponentSelection();

    let newPlayer;
    let newOpponent;

    function createPlayer() {
        newPlayer = new Player(playerName, 0, playerSelection);
        return newPlayer;
    }

    function createOpponent() {
        newOpponent = new Opponent(opponentName, 0, opponentSelection);
        return newOpponent;
    }

    return {createPlayer, createOpponent}
}

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