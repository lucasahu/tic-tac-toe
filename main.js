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

    const startGameBtn = document.querySelector('.start-game-btn');
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
              console.log(`WINNING COMBINATION: ${winCondition[i]}`)
            } else if (gameState[winCondition[i][0]] == 'O' && gameState[winCondition[i][1]] == 'O' && gameState[winCondition[i][2]] == 'O') {
              console.log(`WINNING COMBINATION: ${winCondition[i]}`)
            } else {
              console.log('DID NOT WIN')
            }
          }
    }

    startGameBtn.addEventListener('click', checkWin);

    function playRound() {
        let gridIndex = Number(this.classList[1].replace(/\D/g, ''))
        if (gameState[gridIndex] == '') {
            this.textContent = 'X'
            gameState.splice(gridIndex, 1, 'X');
            console.log(gameState)
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

//EVERY ROUND CHECK FOR WIN CONDITION
    //when clicking on a grid, render the active players symbol
    //we check for the win condition
    //if it is not meet we change active player and keep playing

//UNTIL SOMEONE WINS AND DISPLAY WINNER
    //when the win condition is meet
    //display the winner and the game score counter then add 1 to the game score counter
    //and restart the game
})();