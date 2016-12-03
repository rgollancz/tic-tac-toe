'use strict';

describe("TicTacToeModel", function() {
  var tTTM;
  var playerOne
  var playerTwo

  beforeEach(function() {
    playerOne = new Player("x","player one");
    playerTwo = new Player("o","player two");
    tTTM = new TicTacToeModel(playerOne,playerTwo);
  });

  describe("Game starts", function() {
    it("with 2 players", function() {
      expect(tTTM._players.length).toEqual(2);
    });
    it("with an empty grid", function() {
      expect(tTTM._grid).toEqual([])
    });
  });

  describe("Swap player", function() {
    it("changes the current player", function() {
      tTTM.swapPlayer();
      expect(tTTM.currentPlayer()).toEqual(playerTwo);
    });
  });

  describe("Current player name", function() {
    it("returns the current player's name", function() {
      expect(tTTM.currentPlayerName()).toEqual(playerOne._name);
    });
  });

  describe("Declare winner", function() {
    it("returns the win message and the current player's name", function() {
      expect(tTTM.declareWinner()).toEqual("The winner is player one");
    });
  });

  describe("Declare draw", function() {
    it("returns draw message", function() {
      expect(tTTM.declareDraw()).toEqual("Tada! It's a draw");
    });
  });

})
