
//Query Selectors
var middleContainer = document.querySelector('#middleContainer');
var gameOptions = document.getElementById('gameOptionsContainer');
var classicGame = document.getElementById('classic');
var spicyGame = document.getElementById('spicy');
var playingField = document.getElementById('playingField');
var fighterContainer = document.getElementById('fighterContainer');
var subHeading = document.getElementById('subHeading');
var humanSection = document.getElementById('humanSide');
var computerSection = document.getElementById('computerSide');
var changeGameButton = document.getElementById('changeGameButton');
var leftSideContainer = document.getElementById('leftSideContainer');


//Global Variables
var game1 = new Game



//Event Listeners
classicGame.addEventListener('click', gameSelection);
spicyGame.addEventListener('click', gameSelection);
fighterContainer.addEventListener('click', chooseFighter);
window.addEventListener('load', presentPlayers);

function presentPlayers() {
  loadHuman();
  loadComputer();
}

function loadHuman() {
  humanSection.innerHTML = ''
  humanSection.innerHTML +=`
  <div class="human-emoji" id="humanEmoji">${game1.humanPlayer.token}</div>
  <p class="left-header" id="leftHeader">${game1.humanPlayer.name}</p>
  <p class="human-wins" id="humanWins">Wins: ${game1.humanPlayer.wins}</p>
  `
  hide(changeGameButton);
}
function loadComputer() {
  computerSection.innerHTML += `
<div class="computer-emoji" id="computerEmoji">${game1.computerPlayer.token}</div>
<p class="right-header" id="rightHeader">${game1.computerPlayer.name}</p>
<p class="computer-wins" id="computerWins">Wins: ${game1.computerPlayer.wins}</p>
  `
}


function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function show(element) {
  element.classList.remove('hidden');
}

function hide(element) {
  element.classList.add('hidden');
}


function gameSelection() {
  chooseGameLevel();
  showGameBoard();
  //retrieveWinsFromStorage will be here
}


function chooseGameLevel() {
  if (event.target.id === 'classic') {
    game1.gameVersion = 'classic'
  } else if (event.target.id === 'spicy') {
    game1.gameVersion = 'spicy'
  }
subHeading.innerText = "Choose your fighter!"
}


function showGameBoard() {

  if (game1.gameVersion === 'classic') {
    hide(gameOptions);
    show(fighterContainer);
    fighterContainer.innerHTML = ''
    fighterContainer.classList.add('playing-field')
    // show(fighterContainer);
    // gameOptions.innerHTML = ''
      for (var i = 0; i < 3; i++) {
        fighterContainer.innerHTML += `
      <section class="playing-field ${game1.fighter[i].name}" id="playingField">
        <section class="${game1.fighter[i].name} fighter" id="${game1.fighter[i].id}">
            <img class="${game1.fighter[i].name} fighter-image" src="${game1.fighter[i].src}" id="${game1.fighter[i].id}"/>
        </section>
      </section>
        `
      }
  } else if (game1.gameVersion === 'spicy') {
    hide(gameOptions);
    show(fighterContainer);
    fighterContainer.innerHTML = ''
    fighterContainer.classList.add('playing-field')
    // show(fighterContainer);
      // gameOptions.innerHTML = ''
        for (var i = 0; i < game1.fighter.length; i++) {
          fighterContainer.innerHTML += `
          <section class="playing-field ${game1.fighter[i].name}" id="playingField">
            <section class="${game1.fighter[i].name} fighter" id="${game1.fighter[i].id}">
                <img class="${game1.fighter[i].name} fighter-image" src="${game1.fighter[i].src}" id="${game1.fighter[i].id}"/>
            </section>
          </section>        `
    }
  }
}

function chooseFighter() {
  selectHumanFighter();
  if (game1.board.length === 1) {
    selectComputerFighter();
  } if (game1.board.length === 2) {
    displayFighters();
    pickWinner();
    addWins();
    show(changeGameButton);
  }
}


function selectHumanFighter() {
  if (event.target.id === 'rock' || event.target.id === 'paper' || event.target.id === 'scissors' || event.target.id === 'lizard' || event.target.id === 'alien') {
      game1.humanFighter = event.target.id
      game1.board.push(event.target.id)
    }
  }

function selectComputerFighter() {
if (game1.gameVersion === 'classic') {
  game1.fighter.length = 3
  game1.computerFighter = game1.fighter[getRandomIndex(game1.fighter)].name
  game1.board.push(game1.computerFighter)
} else if (game1.gameVersion === 'spicy') {
  game1.computerFighter = game1.fighter[getRandomIndex(game1.fighter)].name
  game1.board.push(game1.computerFighter)
}
  console.log(game1.board)
}

function displayFighters() {
  // gameOptions.innerHTML = ''
  fighterContainer.innerHTML = ''

  for (i = 0; i < game1.board.length; i++) {
  fighterContainer.innerHTML += `
  <section class="playing-field ${game1.board[i]}" id="playingField">
  <section class="${game1.board[i]} fighter" id="${game1.board[i]}">
      <img class="${game1.board[i]} fighter-image" src="assets/happy-${game1.board[i]}.png" id="${game1.board[i]}"/>
  </section>
  </section>
  `
  }
}


function pickWinner() {
  for (var i = 0; i < game1.board.length; i++) {
    if (game1.board.includes('rock') && ((game1.board.includes('scissors')) || (game1.board.includes('lizard')))) {
      game1.winner = 'rock'
    } else if (game1.board.includes('paper') && ((game1.board.includes('rock')) || (game1.board.includes('alien')))) {
      game1.winner = 'paper'
    } else if (game1.board.includes('scissors') && ((game1.board.includes('paper')) || (game1.board.includes('lizard')))) {
      game1.winner = 'scissors'
    } else if (game1.board.includes('alien') && ((game1.board.includes('scissors')) || (game1.board.includes('rock')))) {
      game1.winner = 'alien'
    } else if (game1.board.includes('lizard') && ((game1.board.includes('paper')) || (game1.board.includes('alien')))) {
      game1.winner = 'lizard'
    }  else
      drawGame();
  }
  console.log(game1.winner)
}

function drawGame() {
  if (game1.humanFighter === game1.computerFighter) {
    game1.draw = true
  }
  if (game1.draw === true) {
    game1.winner = 'none'
    console.log(game1.draw)
  }
}

function addWins() {
  if (game1.humanFighter === game1.winner) {
    game1.humanPlayer.wins+=1
  } else if (game1.computerFighter === game1.winner) {
    game1.computerPlayer.wins+=1
  } else
  game1.draw = true

  console.log('human', game1.humanPlayer.wins)
    console.log('computer', game1.computerPlayer.wins)
}


leftSideContainer.addEventListener('click', changeGame)



function changeGame() {
  if (event.target.id === 'changeGameButton') {
    hide(fighterContainer);
    show(gameOptions);

  }
}

function resetGame() {
  if ()
}

// function updateWins() {
//   if (game1.humanPlayer.wins > 0) {
//
//   }
// }
