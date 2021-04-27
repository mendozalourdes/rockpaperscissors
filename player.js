class Player {
  constructor(name, token) {
    this.name = name;
    this.token = token;
    this.wins = 0;
    this.turn = false
    this.id = Date.now();
  }

  saveWinsToStorage() {
    var human = game.humanPlayer
    var computer = game.computerPlayer
    localStorage.setItem('Human', JSON.stringify(human.wins));
    localStorage.setItem('Computer', JSON.stringify(computer.wins));
  }

  retrieveWinsFromStorage() {
    var wins = JSON.parse(localStorage.getItem(`${this.name}`) || '0');
    return wins
  }


  takeTurn() {
    if (game.board.length === 2) {
      this.turn = true
    }
  }
}
