class Player {
  constructor(name, token) {
    this.name = name;
    this.token = token;
    this.wins = 0;
    this.turn = false
  }

  saveWinsToStorage() {

    localStorage.setItem();

  }


  retrieveWinsFromStorage() {

    localStorage.getItem();

  }


  takeTurn() {
    this.humanTurn = true;

  }



};


// module.exports = Player;
