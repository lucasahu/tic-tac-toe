// GET INPUT FROM USER
const handleInput = (function(){

    const background = document.querySelector('.background');
    const card = document.querySelector('.card');
    const playBtn = document.querySelector('.play-btn');
    const userNameInput = document.querySelector('#username');
    const enemyNameInput = document.querySelector('#enemyname');
    const selectionRadioX = document.querySelector('.selection-x');
    const startGameBtn = document.querySelector('.start-game-btn');

    function showInput() {
        background.style.visibility = 'visible'
        card.style.visibility = 'visible'
    }

    function hideInput() {
        background.style.visibility = 'hidden'
        card.style.visibility = 'hidden'
    }

    playBtn.addEventListener('click', showInput);
    startGameBtn.addEventListener('click', hideInput);

    function getInputs() {

        let playerName = userNameInput.value;
        let enemyName = enemyNameInput.value;
        let playerSelection;
        let enemySelection;

        if (selectionRadioX.checked) {
            playerSelection = 'X';
            enemySelection = 'O';
        } else {
            playerSelection = 'O';
            enemySelection = 'X';
        }

        return {playerName, enemyName, playerSelection, enemySelection};
    }

    function check() {
        console.log(getInputs().playerName);
        console.log(getInputs().enemyName);
        console.log(getInputs().playerSelection);
        console.log(getInputs().enemySelection);
    }

    startGameBtn.addEventListener('click', check);

    return {getInputs}
})();


//TAKE INPUT AND START GAME
const game = (function(){

    const background = document.querySelector('.background');
    const displayWin = document.querySelector('.display-win');
    const startGameBtn = document.querySelector('.start-game-btn');
    const playAgainBtn = document.querySelector('.play-again-btn');
    const restartGameBtn = document.querySelector('.restart-game-btn');
    const winnerDisplay = document.querySelector('.user-win');
    const scoreTracker = document.querySelector('.current-score');
    const gameCell0 = document.querySelector('.grid-0');
    const gameCell1 = document.querySelector('.grid-1');
    const gameCell2 = document.querySelector('.grid-2');
    const gameCell3 = document.querySelector('.grid-3');
    const gameCell4 = document.querySelector('.grid-4');
    const gameCell5 = document.querySelector('.grid-5');
    const gameCell6 = document.querySelector('.grid-6');
    const gameCell7 = document.querySelector('.grid-7');
    const gameCell8 = document.querySelector('.grid-8');

    startGameBtn.addEventListener('click', handleInput.getInputs);

    function objectifyData() {
        let player = {
            name: handleInput.getInputs().playerName,
            symbol: handleInput.getInputs().playerSelection,
            score: 0,
            active: true
        }

        let enemy = {
            name: handleInput.getInputs().enemyName,
            symbol: handleInput.getInputs().enemySelection,
            score: 0,
            active: false
        }
        return {player, enemy}
    }

    startGameBtn.addEventListener('click', objectifyData);

    let gameState = ['', '', '', '', '', '', '', '', ''];

    const winCondition = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    function checkWin() {
        for (let i = 0; i < winCondition.length; i++) {
            if (gameState[winCondition[i][0]] == 'X' && gameState[winCondition[i][1]] == 'X' && gameState[winCondition[i][2]] == 'X') {
                showDisplayWin();
                console.log(`WINNING COMBINATION: ${winCondition[i]}`);
            } else if (gameState[winCondition[i][0]] == 'O' && gameState[winCondition[i][1]] == 'O' && gameState[winCondition[i][2]] == 'O') {
                showDisplayWin();
                console.log(`WINNING COMBINATION: ${winCondition[i]}`);
            }
          }
    }

    startGameBtn.addEventListener('click', checkWin);

    let playerStatus = objectifyData().player.active;
    let enemyStatus = objectifyData().enemy.active;

    function playRound() {
        let gridIndex = Number(this.classList[1].replace(/\D/g, ''))

        if (gameState[gridIndex] == '' && playerStatus == true) {
            this.textContent = objectifyData().player.symbol;
            gameState.splice(gridIndex, 1, objectifyData().player.symbol);
            playerStatus = false;
            enemyStatus = true;
        }
        
        else if (gameState[gridIndex] == '' && playerStatus == false) {
            this.textContent = objectifyData().enemy.symbol;
            gameState.splice(gridIndex, 1, objectifyData().enemy.symbol);
            playerStatus = true;
            enemyStatus = false;
        }
        checkWin();
    }

    gameCell0.addEventListener('click', playRound);
    gameCell1.addEventListener('click', playRound);
    gameCell2.addEventListener('click', playRound);
    gameCell3.addEventListener('click', playRound);
    gameCell4.addEventListener('click', playRound);
    gameCell5.addEventListener('click', playRound);
    gameCell6.addEventListener('click', playRound);
    gameCell7.addEventListener('click', playRound);
    gameCell8.addEventListener('click', playRound);

    function showDisplayWin() {
        background.style.visibility = 'visible'
        displayWin.style.visibility = 'visible'
        console.log(objectifyData().player.name, playerStatus);
        winnerDisplay.textContent = `${playerStatus == false ? objectifyData().player.name : objectifyData().enemy.name} Won`
    }

    function hideDisplayWin() {
        background.style.visibility = 'hidden'
        displayWin.style.visibility = 'hidden' 
    }

    function newRound() {
        gameState = ['', '', '', '', '', '', '', '', ''];
        playerStatus = objectifyData().player.active;
        enemyStatus = objectifyData().enemy.active;
        gameCell0.textContent = '';
        gameCell1.textContent = '';
        gameCell2.textContent = '';
        gameCell3.textContent = '';
        gameCell4.textContent = '';
        gameCell5.textContent = '';
        gameCell6.textContent = '';
        gameCell7.textContent = '';
        gameCell8.textContent = '';

        hideDisplayWin();
    }

    playAgainBtn.addEventListener('click', newRound);

    function scoreCounter() {
        //blabla
    }

    function restartFullGame() {
        newRound();

    }

    //when clicking on a grid, render the active players symbol

    //if it is not meet we change active player and keep playing

})();