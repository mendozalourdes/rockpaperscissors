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
        src: 'assets/happy-alien.png',
        id: 'alien'
      }
    ]
  }

  chooseGameLevel(target) {
    if (target=== 'classic') {
      this.gameVersion = 'classic'
    } else if (target === 'spicy') {
      this.gameVersion = 'spicy'
    }
  }

  chooseFighter(target) {
    if (target === 'rock' || target === 'paper' || target === 'scissors' || target === 'lizard' || target === 'alien') {
        this.humanFighter = target
        this.board.push(this.humanFighter)
      } if (this.board.length === 1 && this.gameVersion === 'classic') {
        this.fighter.length = 3
        this.computerFighter = this.fighter[getRandomIndex(this.fighter)].name
        this.board.push(this.computerFighter)
    } else if (this.board.length === 1 && this.gameVersion === 'spicy') {
        this.computerFighter = this.fighter[getRandomIndex(this.fighter)].name
        this.board.push(this.computerFighter)
    }
    this.humanPlayer.takeTurn();
    this.computerPlayer.takeTurn();
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
  this.humanPlayer.wins = this.humanPlayer.retrieveWinsFromStorage();
  this.computerPlayer.wins = this.computerPlayer.retrieveWinsFromStorage();
  if (this.humanFighter === this.winner) {
      this.humanPlayer.wins+=1
      this.humanPlayer.saveWinsToStorage();
      this.gameCount+=1
  } else if (this.computerFighter === this.winner) {
      this.computerPlayer.wins+=1
        this.computerPlayer.saveWinsToStorage();
      this.gameCount+=1
    }
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
      this.humanFighter = ''
      this.computerFighter = ''
      this.board = []
      this.winner = ''
      this.humanPlayer.turn = false
      this.computerPlayer.turn = false
      this.draw = false
    }

  }
