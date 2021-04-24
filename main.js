

var middleContainer = document.querySelector('#middleContainer');
var gameOptions = document.getElementById('gameOptionsContainer');
var classicGame = document.getElementById('classic');
var spicyGame = document.getElementById('spicy');
var playingField = document.getElementById('playingField');


var game1 = new Game








function getRandomIndex(array) {
  return Math.floor(Math.random() * this.length);
}


classicGame.addEventListener('click', gameSelection);
spicyGame.addEventListener('click', gameSelection);
gameOptions.addEventListener('click', selectFighter);



function gameSelection() {
  chooseGameLevel();
  showGameBoard();
  selectFighter();
  //retrieveWinsFromStorage will be here
}


function chooseGameLevel() {
  if (event.target.id === 'classic') {
    game1.gameVersion = 'classic'
  } else if (event.target.id === 'spicy') {
    game1.gameVersion = 'spicy'
  }
  // console.log(game1)
}


function showGameBoard() {
  if (game1.gameVersion === 'classic') {
    gameOptions.innerHTML = ''
      for (var i = 0; i < 3; i++) {
        gameOptions.innerHTML += `
      <section class="playing-field" id="playingField">
        <section class="${game1.fighter[i].name} fighter" id="${game1.fighter[i].id}">
            <img src="${game1.fighter[i].src}" id="playingField ${game1.fighter[i].id}"/>
        </section>
      </section>
        `
      }
  } else if (game1.gameVersion === 'spicy') {
      gameOptions.innerHTML = ''
        for (var i = 0; i < game1.fighter.length; i++) {
          gameOptions.innerHTML += `
          <section class="playing-field" id="playingField">
            <section class="${game1.fighter[i].name} fighter" id="${game1.fighter[i].id}">
                <img src="${game1.fighter[i].src}" id="playingField ${game1.fighter[i].id}"/>
            </section>
          </section>        `
    }
  }
}

function selectFighter() {
  // game1.chooseFighter();
  for (var i = 0; i < game1.fighter.length; i++) {
      if (event.target.id === `${game1.fighter[i].id}`) {
        // game1.fighter =  `${game1.fighter[i].name}`
        game1.board.push(`'${game1.fighter[i].name}'`)
      }
    }
    console.log(game1.board)
}
