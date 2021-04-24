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
    if (event.target.id === 'rock' || event.target.id === 'paper' || event.target.id === 'scissors' || event.target.id === 'lizard' || event.target.id === 'alien') {
    this.humanFighter = event.target.id

  }



};


// module.exports = Player;
