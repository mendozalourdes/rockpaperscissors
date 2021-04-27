//---------------------Query Selectors---------------------//
var changeGameButton = document.getElementById('changeGameButton');
var chooseFighterContainer = document.getElementById('chooseFighterContainer');
var classicGame = document.getElementById('classic');
var computerHeader = document.getElementById('rightHeader');
var computerWins = document.getElementById('computerWins');
var fighterContainer = document.getElementById('fighterContainer');
var gameOptions = document.getElementById('gameOptionsContainer');
var humanHeader = document.getElementById('leftHeader');
var humanWins = document.getElementById('humanWins');
var spaceProvider = document.getElementById('spaceProvider');
var spicyGame = document.getElementById('spicy')
var subHeader = document.getElementById('subHeading');

//----------------Global Variables -------------------------//
var game = new Game();

//----------------Event Listeners -------------------------//
classicGame.addEventListener('click', gameSelection);
changeGameButton.addEventListener('click', function() {
  location.reload()
});
fighterContainer.addEventListener('click', beginGame);
spicyGame.addEventListener('click', gameSelection);
window.addEventListener('load', presentPlayers);

// -------------------Event Handlers -----------------------//
function presentPlayers() {
  game.humanPlayer.name = 'Human';
  game.computerPlayer.name = 'Computer';
  humanHeader.innerText = game.humanPlayer.name;
  computerHeader.innerText = game.computerPlayer.name;
  pullStoredWins();
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

function gameSelection(event) {
  game.chooseGameLevel(event.target.id)
  showGameBoard();
}


function prepGameBoard() {
  subHeader.innerText = 'Choose your fighter!'
  show(spaceProvider);
  hide(gameOptions);
  show(fighterContainer);
  show(chooseFighterContainer);
  chooseFighterContainer.innerHTML = ''
  fighterContainer.innerHTML = ''
  fighterContainer.classList.add('playing-field');
}

function showGameBoard() {
  var gameDifficulty = 0;
  prepGameBoard();
  if (game.gameVersion === 'classic') {
    gameDifficulty = 3
  } else {
    gameDifficulty = 5;
  }
  for (var i = 0; i < gameDifficulty; i++) {
    fighterContainer.innerHTML += `
      <section class="playing-field ${game.fighter[i].name}" id="playingField">
        <section class="${game.fighter[i].name} fighter" id="${game.fighter[i].name}">
            <img class="${game.fighter[i].name} fighter-image" src="${game.fighter[i].src}" id="${game.fighter[i].name}" alt="fighter-option-image ${game.fighter[i].name}"/>
        </section>
      </section>
        `
  }
}

function beginGame(event) {
  game.chooseFighter(event.target.id);
  game.chooseComputerFighter();
  displayFighters();
}

function displayFighters() {
  fighterContainer.innerHTML = ''
  for (i = 0; i < 2; i++) {
    chooseFighterContainer.innerHTML += `
  <section class="playing-field ${game.board[i]}" id="playingField">
  <section class="${game.board[i]} fighter" id="${game.board[i]}">
      <img class="${game.board[i]} fighter-image chosen-fighter" src="assets/happy-${game.board[i]}.png" id="${game.board[i]}" alt="-chosen-fighter-image ${game.fighter[i].name}"/>
  </section>
  </section>
  `
    subHeader.innerText = "And the winner is......🥁🥁🥁";
  }
  window.setTimeout(continueGame, 500);
}

function continueGame() {
  game.pickWinner();
  game.addWins();
  game.checkforDraw();
  updateLocalStorage();
  updateWinner();
  resetAll();
}

function resetAll() {
  game.resetGame();
  window.setTimeout(returnGameBoard, 1500);
}

function returnGameBoard() {
  hide(chooseFighterContainer);
  show(changeGameButton);
  showGameBoard();
}

function pullStoredWins() {
  game.humanPlayer.retrieveWinsFromStorage();
  game.computerPlayer.retrieveWinsFromStorage();
  displayWins();
}

function updateLocalStorage() {
  game.humanPlayer.saveWinsToStorage();
  game.computerPlayer.saveWinsToStorage();
}

function displayWins() {
  humanWins.innerText = 'Wins: ' + game.humanPlayer.retrieveWinsFromStorage();
  computerWins.innerText = 'Wins: ' + game.computerPlayer.retrieveWinsFromStorage();
}

function updateWinner() {
  if (game.humanFighter === game.winningFighter) {
    subHeader.innerText = `${game.humanPlayer.token}The ${game.humanPlayer.name}!${game.humanPlayer.token}`;
  } else if (game.computerFighter === game.winningFighter) {
    subHeader.innerText = `${game.computerPlayer.token}The ${game.computerPlayer.name}!${game.computerPlayer.token}`;
  } else if (game.draw === true) {
    subHeader.innerText = `🥺🥺Nobody! It's a tie!!🥺🥺`;
  }
  displayWins();
}
