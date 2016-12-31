'use strict';

describe("PlayerModel", function() {
  var player

  beforeEach(function() {
    player = new Player("x","player one");
  });

  describe("Player", function() {
    it("has a name", function() {
      expect(player._name).toEqual("player one");
    });
    it("has a marker", function() {
      expect(player._marker).toEqual("x");
    });
  });
})
