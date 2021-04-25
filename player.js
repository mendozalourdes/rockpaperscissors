// var Game = require('./game');

class Player {
  constructor(name, token) {
    this.name = name;
    this.token = token;
    this.wins = 0;
  }

  saveWinsToStorage() {
    var human = game1.humanPlayer
    var computer = game1.computerPlayer
    localStorage.setItem('Human', JSON.stringify(human.wins))
    localStorage.setItem('Computer', JSON.stringify(computer.wins))
  }

  retrieveWinsFromStorage() {
      var wins = JSON.parse(localStorage.getItem(`${this.name}`) || '0')
      return wins
  }


  takeTurn() {
    if (event.target.id === 'rock' || event.target.id === 'paper' || event.target.id === 'scissors' || event.target.id === 'lizard' || event.target.id === 'alien') {
      this.humanFighter = event.target.id;
  } else if (this.gameVersion === 'classic') {
      this.fighter.length = 3;
      this.computerFighter = this.fighter[getRandomIndex(this.fighter)].name;
      this.board.push(this.computerFighter);
  } else if (this.gameVersion === 'spicy') {
      this.computerFighter = this.fighter[getRandomIndex(this.fighter)].name;
      this.board.push(this.computerFighter);
    }
  }
}


// module.exports = Player;
