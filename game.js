var Player = require('./player');

class Game {
  constructor(gameVersion) {
    this.playerOne = new Player('Human', '👩🏽')
    this.playerTwo = new Player('Computer', '💻')
    this.gameVersion = gameVersion
    this.humanTurn = true;
    this.draw = false;
    this.fighterData = {
      rock: {
        name: 'rock',
        src: 'assets/happy-rocks.png',
        id: 'rock'
      } ,
      paper: {
        name: 'paper',
        src: 'assets/happy-paper.png',
        id: 'paper'
      } ,
      scissors: {
        name: 'scissors',
        src: 'assets/happy-scissors.png',
        id: 'scissors'
      },
      lizzard: {
        name: 'lizzard',
        src: 'assets/lizard.png',
        id: 'lizzard'
      },
      alien: {
        name: 'alien',
        src: 'assets/lines-alien.png',
        id: 'alien'
      }
    }
    this.board = []
  }
}


var game = new Game ('difficult');

console.log(game.gameVersion)
