
//---------------------Query Selectors---------------------//
var gameOptions = document.getElementById('gameOptionsContainer');
var fighterContainer = document.getElementById('fighterContainer');
var subHeading = document.getElementById('subHeading');
var changeGameButton = document.getElementById('changeGameButton');
var humanWins = document.getElementById('humanWins')
var computerWins = document.getElementById('computerWins')
// var leftSideContainer = document.getElementById('leftSideContainer');
// var middleContainer = document.querySelector('#middleContainer');

//----------------Global Variables -------------------------//
var game1 = new Game();

//----------------Event Listeners -------------------------//
window.addEventListener('load', presentPlayers);
gameOptions.addEventListener('click', gameSelection);
fighterContainer.addEventListener('click', beginGame);
changeGameButton.addEventListener('click', function(){location.reload()});


// fighterContainer.addEventListener("click", handler);

// -------------------Event Handlers -----------------------//
function presentPlayers() {
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

function gameSelection() {
  game1.chooseGameLevel();
  showGameBoard();
}

function showGameBoard() {
  if (game1.gameVersion === 'classic') {
    subHeading.innerText = 'Choose your fighter!'
    hide(gameOptions);
    show(fighterContainer);
    fighterContainer.innerHTML = ''
    fighterContainer.classList.add('playing-field')
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
    subHeading.innerText = 'Choose your fighter!'
    hide(gameOptions);
    show(fighterContainer);
    fighterContainer.innerHTML = ''
    fighterContainer.classList.add('playing-field')
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

function displayFighters() {
  fighterContainer.innerHTML = ''
  for (i = 0; i < 2; i++) {
  fighterContainer.innerHTML += `
  <section class="playing-field ${game1.board[i]}" id="playingField">
  <section class="${game1.board[i]} fighter" id="${game1.board[i]}">
      <img class="${game1.board[i]} fighter-image" src="assets/happy-${game1.board[i]}.png" id="${game1.board[i]}"/>
  </section>
  </section>
  `
  }
}

function beginGame(event){
  var target = (event.target.id)
  game1.chooseFighter(target);
  console.log(event.target.id)
  console.log(event.target)
  console.log(game1.board)
  console.log(game1.humanFighter)
  console.log(game1.computerFighter)
  displayFighters();
  game1.pickWinner();
  game1.addWins();
  game1.checkforDraw();
  updateLocalStorage();
  updateWinner();
  slowReset();
  // console.log('board', game1.board)
  // console.log('h', game1.humanFighter)
  // console.log('c', game1.computerFighter);
  // console.log('hwin', game1.humanPlayer.wins)
  // console.log('cwin', game1.computerPlayer.wins)
  // console.log('count', game1.gameCount)
  // game1.resetGame();
}

function slowReset() {
    resetAll();
    // window.setTimeout(resetAll, 2 * 1000);
    //upon clicking on the fighter, these functions run and the
    //you can stop the propogation/event. need an event listener to look for
    //id of fighter image or something like that
    //need something that loads back to fighters page
}

 function resetAll() {
  game1.resetGame();
  window.setTimeout(returnGameBoard, 1000);

 }


 function returnGameBoard() {
  show(changeGameButton);
   showGameBoard();
   game1.resetGame()
   console.log(game1.board)
   beginGame();
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

function updateWinner() {
  if (game1.humanFighter === game1.winner) {
    subHeading.innerText = `${game1.humanPlayer.token}${game1.humanPlayer.name} won this round!${game1.humanPlayer.token}`
  } else if (game1.computerFighter === game1.winner) {
        subHeading.innerText = `${game1.computerPlayer.token}${game1.computerPlayer.name} won this round!${game1.computerPlayer.token}`
  } else if (game1.draw === true) {
      subHeading.innerText = `🥺🥺It's a draw!!🥺🥺`
  }
  displayWins();
}

  function displayWins() {
  humanWins.innerText = 'Wins: ' + game1.humanPlayer.retrieveWinsFromStorage();
  computerWins.innerText = 'Wins: ' + game1.computerPlayer.retrieveWinsFromStorage();
}
