// var Player = require('./player');

// var player1 = new Player('Human', '👩🏽')
// var player2 = new Player('Computer', '💻')

class Game {
  constructor(gameVersion, fighter, winner) {
    this.humanPlayer = new Player('Human', '👩🏽')
    this.computerPlayer = new Player('Computer', '💻')
    this.gameVersion = gameVersion
    this.draw = false;
    this.humanFighter = fighter
    this.computerFighter = fighter
    this.winner = winner
    this.board = []
    this.fighter = [
    // ['rock', 'paper', 'scissors', 'lizzard', 'alien']
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


//should be able to choose a fighter
  // chooseFighter(gameVersion) {



  //     this.board.push(fighterId)
  //
  //       if(this.gameVersion === 'classic') {
  //
  //       }
  //
  //     this is where the randomizer index thing goes
  //



  //   // for (var i = 0; i < this.board.length; i++) {
  //     if (this.board.includes('rock') && this.board.includes('paper')) {
  //       return
  //     }
  //     else if ((this.board.includes('rock') && this.board.includes('scissors'))
  //       return
  //     else if ((this.board.includes('paper') && this.board.includes('scissors'))
  //       return

  //     if ( this.board.includes(fighterId)) {
  //       console.log(this.board)
  //     } else
  //       console.log(this.board)
  //     }
  // //
  //     }
  //
  //   }
  //
  //
  //     this.fighter === rock && this.fighter
  // }
//
// //should be able to determine a winner based on conditionals
//   pickWinner() {
//
//
//   }
//
// //should be able to check if there's a draw
//   checkforDraw() {
//
//
//   }
//
// //should update the corresponding player's wins
//   updateWin() {
//
//
//   }
//
// //should reset the game once there's a winner (go back to choose fighter)
//   resetGame() {
//
//   }




}

// module.exports = Game;
//
// var game = new Game ('classic');
// //
// console.log(game.fighter[0].name)
// //

// game.chooseFighter()

// console.log(game.board[0].rock.name)
