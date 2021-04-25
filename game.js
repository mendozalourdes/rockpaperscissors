// var Player = require('./player');
class Game {
  constructor(gameVersion, fighter, winner) {
    this.humanPlayer = new Player('Human', '👩🏽‍🦱')
    this.computerPlayer = new Player('Computer', '💻')
    this.gameVersion = gameVersion
    this.draw = false;
    this.humanFighter = fighter
    this.computerFighter = fighter
    this.winner = winner
    this.gameCount= 0
    this.board = []
    this.fighter = [
       {
        name: 'rock',
        src: 'assets/happy-rock.png',
        id: 'rock'
      } ,
       {
        name: 'paper',
        src: 'assets/happy-paper.png',
        id: 'paper'
      } ,
      {
        name: 'scissors',
        src: 'assets/happy-scissors.png',
        id: 'scissors'
      },
       {
        name: 'lizard',
        src: 'assets/happy-lizard.png',
        id: 'lizard'
      },
       {
        name: 'alien',
        src: 'assets/lines-alien.png',
        id: 'alien'
      }
    ]
  }

  chooseGameLevel() {
    if (event.target.id === 'classic') {
      this.gameVersion = 'classic'
    } else if (event.target.id === 'spicy') {
      this.gameVersion = 'spicy'
    }
    // subHeading.innerText = "Choose your fighter!"
  }


  chooseFighter() {
    if (event.target.id === 'rock' || event.target.id === 'paper' || event.target.id === 'scissors' || event.target.id === 'lizard' || event.target.id === 'alien') {
        this.humanFighter = event.target.id
        this.board.push(event.target.id)
  } if (this.board.length === 1) {
      if (this.gameVersion === 'classic') {
        this.fighter.length = 3
        this.computerFighter = this.fighter[getRandomIndex(this.fighter)].name
        this.board.push(this.computerFighter)
    } else if (this.gameVersion === 'spicy') {
        this.computerFighter = this.fighter[getRandomIndex(this.fighter)].name
        this.board.push(this.computerFighter)
    }
  }
}

pickWinner() {
  for (var i = 0; i < this.board.length; i++) {
    if (this.board.includes('rock') && ((this.board.includes('scissors')) || (this.board.includes('lizard')))) {
      this.winner = 'rock'
    } else if (this.board.includes('paper') && ((this.board.includes('rock')) || (this.board.includes('alien')))) {
      this.winner = 'paper'
    } else if (this.board.includes('scissors') && ((this.board.includes('paper')) || (this.board.includes('lizard')))) {
      this.winner = 'scissors'
    } else if (this.board.includes('alien') && ((this.board.includes('scissors')) || (this.board.includes('rock')))) {
      this.winner = 'alien'
    } else if (this.board.includes('lizard') && ((this.board.includes('paper')) || (this.board.includes('alien')))) {
      this.winner = 'lizard'
    }
  }
}

addWins() {
  if (this.humanFighter === this.winner) {
      this.humanPlayer.wins+=1
      //reassign humanWins.innerText = ${game1.humanPlayer.wins} in main js w/selector
  } else if (this.computerFighter === this.winner) {
      this.computerPlayer.wins+=1
      //reassign computer.innerText = ${game1.humanPlayer.wins} in main js w/selector
    }
    return this.gameCount+=1
  }

checkforDraw() {
  if (this.humanFighter === this.computerFighter) {
    this.draw = true
  }
  if (this.draw === true) {
    this.winner = 'none'
    this.gameCount+=1
    }
  }

resetGame() {
  if (this.gameCount === 1) {
      this.gameGoing = false
      this.humanFighter = ''
      this.computerFighter = ''
      this.board.splice(0, 2)
      this.winner = ''
      this.gameCount = 0
  }
}

}

// function delayBoardReset() {
//   disableButtons()
//   //METHOD INSIDE GAME CLASS, RE TIMEOUT
//   // window.setTimeout(resetGame, 2 * 1000);
// }




// module.exports = Game;
//
// var game = new Game ('spicy');
// game.humanFighter = 'alien'
// game.computerFighter = 'rock'
// game.board = ['alien', 'rock']
// game.pickWinner();
// game.addWins();
// game.humanFighter = 'rock'
// game.computerFighter = 'alien'
// game.board = ['rock', 'alien']
// game.pickWinner();
// game.addWins();


// console.log('winner', game.winner)
// console.log('human', game.humanPlayer.wins)
// console.log('comp', game.computerPlayer.wins)
// console.log(game.gameCount)
// console.log('count', game.gameCount)
// console.log('draw', game.draw)
// console.log(game.board)
// console.log('turn', game.humanPlayer.turn)
// console.log(game.gameCount)
