

var middleContainer = document.querySelector('#middleContainer');
var gameOptions = document.getElementById('gameOptionsContainer');
var classicGame = document.getElementById('classic');
var spicyGame = document.getElementById('spicy');

var game1 = new Game








function getRandomIndex(array) {
  return Math.floor(Math.random() * this.length);
}


gameOptions.addEventListener('click', gameSelection);

function gameSelection() {
  chooseGameLevel();
  showGameBoard();

}


function chooseGameLevel() {
  if (event.target.id === 'classic') {
    game1.gameVersion = 'classic'
  } else if (event.target.id === 'spicy') {
    game1.gameVersion = 'spicy'
  }
  console.log(game1)
}


// for (var i = 0; i < game.fighter.length, i++) {
//
// }

function showGameBoard() {
  gameOptions.innerHTML = ''
  if (game1.gameVersion === 'classic') {
    gameOptions.innerHTML += `
    <section class="${game1.fighter[0].name} fighter" id="${game1.fighter[0].id}">
        <img src="${game1.fighter[0].src}"/>
    </section>
    <section class="${game1.fighter[1].name} fighter" id="${game1.fighter[1].id}">
        <img src="${game1.fighter[1].src}"/>
    </section>
    <section class="${game1.fighter[2].name} fighter" id="${game1.fighter[2].id}">
        <img src="${game1.fighter[2].src}"/>
    </section>
    `

  //
  // } else if (game1.gameVersion === 'spicy') {

  }

}
