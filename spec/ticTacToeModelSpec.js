'use strict';

describe("TicTacToeModel", function() {
  var tTTM;
  var playerOne
  var playerTwo

  beforeEach(function() {
    playerOne = new Player();
    playerTwo = new Player();
    tTTM = new TicTacToeModel(playerOne,playerTwo);
  });

  describe("Model", function() {
    it("has 2 players", function() {
      expect(tTTM._players.length).toEqual(2);
    });
  });


})
