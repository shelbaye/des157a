(function(){
    'use strict';
    console.log('reading JS');

    const startGame = document.querySelector('#startgame');
    const gameControl = document.querySelector('#gamecontrol');
    const game = document.querySelector('#game');
    const score = document.querySelector('#score');
    const actionArea = document.querySelector('#actions');

    //overlay rules
    const how = document.querySelector('#how');
    const rulesClose = document.querySelector('#rules button');

    const gameData = {
        dice: ['images/1die.jpg', 'images/2die.jpg', 'images/3die.jpg', 'images/4die.jpg', 'images/5die.jpg', 'images/6die.jpg'],
        players: ['Monkey', 'Penguin'],
        score: [0, 0],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0,
        gameEnd: 29
    };

    how.addEventListener('click', function(event){
        event.preventDefault();
        rules.classList.remove('hidden');
    });

    rulesClose.addEventListener('click', function(event){
        event.preventDefault();
        rules.classList.add('hidden');
    });

    startGame.addEventListener('click', function(){
        gameData.index = Math.round(Math.random());
        //console.log(gameData.index);
        startGame.remove();
        gameControl.innerHTML += '<button id="quit">Quit Battle?</button>';

        
        document.getElementById('quit').addEventListener('click', function(){
            location.reload();
        });

        console.log("set up the turn!");

        setUpTurn();


    });

    function setUpTurn() {
        game.innerHTML = `<p>${gameData.players[gameData.index]}'s turn!</p>`;
        actionArea.innerHTML = '<button id="roll">Attack</button>';
        document.getElementById('roll').addEventListener('click', throwDice);
    }

    function throwDice(){
        actionArea.innerHTML = '';
        gameData.roll1 = Math.floor(Math.random() * 6) + 1;
        gameData.roll2 = Math.floor(Math.random() * 6) + 1;
        game.innerHTML = `<p>${gameData.players[gameData.index]}'s turn!</p>`;
        game.innerHTML += `<img src="${gameData.dice[gameData.roll1-1]}"><img src="${gameData.dice[gameData.roll2-1]}">`
        gameData.rollSum = gameData.roll1 + gameData.roll2;
        
        if(gameData.rollSum === 2){
            //console.log('snake eyes!');
            game.innerHTML += '<p>Oh snap! Snake eyes!</p>';
            gameData.score[gameData.index] = 0;
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            setTimeout(setUpTurn, 2000);
        } 
        else if (gameData.roll1 === 1 || gameData.roll2 === 1){
            //console.log("one of the two dice was a 1");
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            game.innerHTML += `<p>Single attack, your oppnonent blocked it :(${gameData.players[gameData.index]}</p>`;
            setTimeout(setUpTurn, 2000);
        } 
        else {
            //console.log("the game proceeds");
            gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
            actionArea.innerHTML = '<button id="rollagain">Attack!</button> <button id="pass">Defend!</button>';

            document.getElementById('rollagain').addEventListener('click', function(){
                setUpTurn();
            });

            document.getElementById('pass').addEventListener('click', function(){
                gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                setUpTurn();
            });

        }

        checkWinningCondition();

    } // end throw dice function...

    function checkWinningCondition(){
        if(gameData.score[gameData.index] > gameData.gameEnd){
            score.innerHTML = `<h2>${gameData.players[gameData.index]} wins with ${gameData.score[gameData.index]} points!</h2>`;

            actionArea.innerHTML = '';
            document.getElementById('quit').innerHTML = "Rematch?";
        }
        else {
            // show current score
            score.innerHTML = `<p>The score is currently <strong>${gameData.players[0]} ${gameData.score[0]}</strong> and <strong>${gameData.players[1]} ${gameData.score[1]}</strong></p>`;
        }
    }

    function showCurrentScore(){
        score.innerHTML = `<p>The score is currently <strong>${gameData.players[0]} ${gameData.score[0]}</strong> and <strong>${gameData.players[1]} ${gameData.score[1]}</strong></p>`
    }

})();