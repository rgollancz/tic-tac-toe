'use strict';

describe("TicTacToeModel", function() {
  var tTTM;
  var playerOne
  var playerTwo

  beforeEach(function() {
    playerOne = new Player("x");
    playerTwo = new Player("o");
    tTTM = new TicTacToeModel(playerOne,playerTwo);
  });

  describe("Game starts", function() {
    it("with 2 players", function() {
      expect(tTTM._players.length).toEqual(2);
    });
    it("with an empty grid", function() {
      expect(tTTM._grid).toEqual([["","",""],["","",""],["","",""]])
    });
  });

  describe("Swap player", function() {
    it("changes the current player", function() {
      tTTM.swapPlayer();
      expect(tTTM.currentPlayer()).toEqual(playerTwo);
    });
  });

})
