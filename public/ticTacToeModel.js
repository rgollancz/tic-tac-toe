TicTacToeModel = function(playerOne,playerTwo) {
  this._players = [playerOne, playerTwo]
  this._grid = [["","",""],
                ["","",""],
                ["","",""]]
  this.WINNING_COMBOS = 0
}

TicTacToeModel.prototype.swapPlayer = function() {
  this._players = this._players.reverse();
};

TicTacToeModel.prototype.currentPlayer = function() {
  return this._players[0];
};

TicTacToeModel.prototype.newTurn = function(location, callback) {

};
