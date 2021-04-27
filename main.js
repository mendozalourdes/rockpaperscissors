//---------------------Query Selectors---------------------//
var changeGameButton = document.getElementById('changeGameButton');
var chooseFighterContainer = document.getElementById('chooseFighterContainer');
var computerHeader = document.getElementById('rightHeader');
var computerWins = document.getElementById('computerWins');
var fighterContainer = document.getElementById('fighterContainer');
var gameOptions = document.getElementById('gameOptionsContainer');
var humanHeader = document.getElementById('leftHeader');
var humanWins = document.getElementById('humanWins');
var spaceProvider = document.getElementById('spaceProvider');
var subHeading = document.getElementById('subHeading');

//----------------Global Variables -------------------------//
var game1 = new Game();

//----------------Event Listeners -------------------------//
window.addEventListener('load', presentPlayers);
gameOptions.addEventListener('click', gameSelection);
fighterContainer.addEventListener('click', beginGame);
changeGameButton.addEventListener('click', function() {
  location.reload()
});

// -------------------Event Handlers -----------------------//
function presentPlayers() {
  game1.humanPlayer.name = 'Human';
  game1.computerPlayer.name = 'Computer';
  humanHeader.innerText = game1.humanPlayer.name;
  computerHeader.innerText = game1.computerPlayer.name;
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
  game1.chooseGameLevel(event.target.id);
  showGameBoard();
}

function prepGameBoard() {
  subHeading.innerText = 'Choose your fighter!'
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
  if (game1.gameVersion === 'classic') {
    gameDifficulty = 3
  } else {
    gameDifficulty = 5;
  }
  for (var i = 0; i < gameDifficulty; i++) {
    fighterContainer.innerHTML += `
      <section class="playing-field ${game1.fighter[i].name}" id="playingField">
        <section class="${game1.fighter[i].name} fighter" id="${game1.fighter[i].name}">
            <img class="${game1.fighter[i].name} fighter-image" src="${game1.fighter[i].src}" id="${game1.fighter[i].name}" alt="fighter-option-image ${game1.fighter[i].name}"/>
        </section>
      </section>
        `
  }
}

function beginGame(event) {
  game1.chooseFighter(event.target.id);
  game1.chooseComputerFighter();
  displayFighters();
}

function displayFighters() {
  fighterContainer.innerHTML = ''
  for (i = 0; i < 2; i++) {
    chooseFighterContainer.innerHTML += `
  <section class="playing-field ${game1.board[i]}" id="playingField">
  <section class="${game1.board[i]} fighter" id="${game1.board[i]}">
      <img class="${game1.board[i]} fighter-image chosen-fighter" src="assets/happy-${game1.board[i]}.png" id="${game1.board[i]}" alt="-chosen-fighter-image ${game1.fighter[i].name}"/>
  </section>
  </section>
  `
    subHeading.innerText = "And the winner is......🥁🥁🥁";
  }
  window.setTimeout(continueGame, 500);
}

function continueGame() {
  game1.pickWinner();
  game1.addWins();
  game1.checkforDraw();
  updateLocalStorage();
  updateWinner();
  resetAll();
}

function resetAll() {
  game1.resetGame();
  window.setTimeout(returnGameBoard, 1500);
}

function returnGameBoard() {
  hide(chooseFighterContainer);
  show(changeGameButton);
  showGameBoard();
}

function pullStoredWins() {
  game1.humanPlayer.retrieveWinsFromStorage();
  game1.computerPlayer.retrieveWinsFromStorage();
  displayWins();
}

function updateLocalStorage() {
  game1.humanPlayer.saveWinsToStorage();
  game1.computerPlayer.saveWinsToStorage();
}

function displayWins() {
  humanWins.innerText = 'Wins: ' + game1.humanPlayer.retrieveWinsFromStorage();
  computerWins.innerText = 'Wins: ' + game1.computerPlayer.retrieveWinsFromStorage();
}

function updateWinner() {
  if (game1.humanFighter === game1.winningFighter) {
    subHeading.innerText = `${game1.humanPlayer.token}The ${game1.humanPlayer.name}!${game1.humanPlayer.token}`;
  } else if (game1.computerFighter === game1.winningFighter) {
    subHeading.innerText = `${game1.computerPlayer.token}The ${game1.computerPlayer.name}!${game1.computerPlayer.token}`;
  } else if (game1.draw === true) {
    subHeading.innerText = `🥺🥺Nobody! It's a tie!!🥺🥺`;
  }
  displayWins();
}
