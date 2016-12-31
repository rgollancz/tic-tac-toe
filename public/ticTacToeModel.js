TicTacToeModel = function(playerOne,playerTwo) {
  this._players = [playerOne, playerTwo]
  this._grid = []
  this.WINNING_COMBOS = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,9],[0,4,8],[2,4,6]]
  this.DRAW_COMBOS = [[0,1,2,3,4,5,6,7,8]]
}

TicTacToeModel.prototype.swapPlayer = function() {
  this._players = this._players.reverse();
};

TicTacToeModel.prototype.currentPlayer = function() {
  return this._players[0];
};

TicTacToeModel.prototype.currentPlayerName = function() {
  return this._players[0]._name;
};

TicTacToeModel.prototype.currentPlayerMarker = function() {
  return this._players[0]._marker;
};

TicTacToeModel.prototype.currentPlayerMoves = function () {
  
};

TicTacToeModel.prototype.isWin = function () {
  return "win" === "win"
  // extract (reduce?) grid locations for currentPlayer
  // order from lowest to highest
  // compare numbers to WINNING_COMBOS
};

TicTacToeModel.prototype.isDraw = function () {
  return "draw" === "draw"
  // extract all gridLocations from this._grid
  // compare them to DRAW_COMBOS
};

TicTacToeModel.prototype.declareWinner = function () {
  return "The winner is " + this.currentPlayerName();
};

TicTacToeModel.prototype.declareDraw = function () {
  return "Tada! It's a draw"
};

TicTacToeModel.prototype.checkBoard = function() {
  if(this.isWin()) return this.declareWinner();
  if(this.isDraw()) return this.declareDraw();
};

TicTacToeModel.prototype.addMove = function(callback) {
  this._grid.push(this._players[0]._name, gridLocation);
  callback();
}

TicTacToeModel.prototype.newTurn = function(gridLocation) {
  var self = this;
  this.addMove(self.checkBoard())
};
